import React, { Component, Fragment } from "react";
import Graph from "vis-react";
// import { getObjects } from '../../../Utils';
import initialGraph from "../dummyData/data.json";
var highlightActive = false;
import data from "../dummyData/legislatorDummyData";
import { contributorData } from "../dummyData/candidateContributionDummyData";
import { connect } from "react-redux";
import { setCandContributorsThunk } from "../store/candcontrib";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import ReplayIcon from "@material-ui/icons/Replay";
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import PanToolIcon from '@material-ui/icons/PanTool';
import { Grid } from "@material-ui/core";
import Modal from 'react-modal';


// modal styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "90vw",
    height: "90vh",
    overflow: "hidden"
  },
};


// graph options
let options = {
  layout: {
    randomSeed: 1,
  },
  nodes: {
    fixed: {
      x: false,
      y: false,
    },
    shape: "dot",
    size: 20,
    borderWidth: 0,
    borderWidthSelected: 1,
    font: {
      size: 15,
      align: "center",
      bold: {
        color: "#bbbdc0",
        size: 15,
        vadjust: 0,
        mod: "bold",
      },
    },
  },
  edges: {
    width: 5,
    color: {
      color: "#D3D3D3",
      highlight: "#797979",
      hover: "#797979",
      opacity: 1.0,
    },
    arrows: {
      to: { enabled: true, scaleFactor: 1, type: "arrow" },
      middle: { enabled: false, scaleFactor: 1, type: "arrow" },
      from: { enabled: true, scaleFactor: 1, type: "arrow" },
    },
    smooth: {
      type: "continuous",
      roundness: 0,
    },
  },
  // groups: {
  //   Biology: {
  //     color: {
  //       background: "#ffffff",
  //       border: "#c89dc8",
  //       highlight: {
  //         border: "#c89dc8",
  //         background: "#ffffff",
  //       },
  //       hover: {
  //         border: "#c89dc8",
  //         background: "#ffffff",
  //       },
  //     },
  //   },
  //   // physics: {
  //   //   barnesHut: {
  //   //     gravitationalConstant: -30000,
  //   //     centralGravity: 1,
  //   //     springLength: 70,
  //   //     avoidOverlap: 1,
  //   //   },
  //   // },
  //   stabilization: { iterations: 2500 },
  // },
  interaction: {
    hover: false,
    hoverConnectedEdges: false,
    hoverEdges: false,
    selectable: true,
    selectConnectedEdges: false,
    zoomView: false,
    dragView: false,
  }
};

function createGraph(candcontrib) {
  let jsonData = initialGraph;

  let nodes = [];
  let edges = [];

  const data = candcontrib;

  // ROOT NODE
  if (Object.keys(data).length) {
    let newNode = {};

    newNode.color = "#78E983";
    newNode.label = data.response.contributors.attributes.cand_name;
    newNode.id = data.response.contributors.attributes.cid;
    nodes.push(newNode);
  }

  //Leading from links

  data.response.contributors.contributor.map((contributor) => {
    let newNode = {};
    newNode.color = "#FF5A5A";
    newNode.id = contributor.attributes.org_name;
    newNode.label = contributor.attributes.org_name;
    newNode.from = data.response.contributors.attributes.cid;
    newNode.to = newNode.id;
    nodes.push(newNode);
  });

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].target !== "" && nodes[i].to !== "") {
      let edgeDir = {};
      edgeDir.from = nodes[i].from;
      edgeDir.to = nodes[i].to;
      edgeDir.arrows = "none";
      edges.push(edgeDir);
    }
  }

  let newGraph = {};
  newGraph.nodes = nodes;
  newGraph.edges = edges;

  return newGraph;
}

export class NetworkGraph extends Component {
  setState(stateObj) {
    if (this.mounted) {
      super.setState(stateObj);
    }
  }
  componentWillMount() {
    this.mounted = true;
  }

  constructor(props) {
    super(props);
    this.events = {
      select: function (event) {
        var { nodes, edges } = event;
      },
      hoverNode: function (event) {
        this.neighbourhoodHighlight(event, this.props.searchData);
      },
      blurNode: function (event) {
        this.neighbourhoodHighlightHide(event);
      },
      click: function (event) {
        this.redirectToLearn(event, this.props.searchData);
      },
    };
    this.state = { graph: {} };
    this.measure = this.measure.bind(this);
    this.events.hoverNode = this.events.hoverNode.bind(this);
    this.events.blurNode = this.events.blurNode.bind(this);
    this.events.click = this.events.click.bind(this);
    this.neighbourhoodHighlight = this.neighbourhoodHighlight.bind(this);
    this.redirectToLearn = this.redirectToLearn.bind(this);
    this.neighbourhoodHighlightHide =
      this.neighbourhoodHighlightHide.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.candcontrib !== prevProps.candcontrib) {
      const newGraph = createGraph(this.props.candcontrib);
      this.setState({
        graph: newGraph,
        style: { width: "100%", height: "500px" },
        network: null,
      });
    }
  }

  componentDidMount() {
    this.mounted = true;
    window.addEventListener("resize", this.measure);
    const newGraph = createGraph(this.props.candcontrib);
    this.setState({
      graph: newGraph,
      style: { width: "100%", height: "500px" },
      fullscreenStyle: { width: "100%", height: "100%"},
      network: null,
      options: options,
      branchingActive: false
    });
  }

  componentWillUnmount() {
    this.mounted = false;
    window.removeEventListener("resize", this.measure);
  }

  measure(data) {
    this.state.network.redraw();
    this.state.network.fit();
  }

  redirectToLearn(params, searchData) {
    console.log(
      "get node at>>>>",
      this.state.network.getNodeAt(params.pointer.DOM)
    );
  }

  neighbourhoodHighlight(params, searchData) {
    let allNodes = this.state.graph.nodes;
    // let cloneNodes = allNodes.map(a => {return {...a}});
    let Nodes = new this.vis.DataSet(allNodes);
    let cloneNodes = Nodes.get({ returnType: "Object" });

    this.state.network.canvas.body.container.style.cursor = "pointer";
    // this.setState({cursor});

    if (params.node !== undefined) {
      highlightActive = true;
      let i, j;
      let selectedNode = params.node;
      let degrees = 1;

      for (var nodeId in cloneNodes) {
        cloneNodes[nodeId].color = "rgba(200,200,200,0.5)";
        if (cloneNodes[nodeId].hiddenLabel === undefined) {
          cloneNodes[nodeId].hiddenLabel = cloneNodes[nodeId].label;
          cloneNodes[nodeId].label = undefined;
        }
      }

      let connectedNodes = this.state.network.getConnectedNodes(selectedNode);
      let allConnectedNodes = [];
      // get the second degree nodes
      for (i = 1; i < degrees; i++) {
        for (j = 0; j < connectedNodes.length; j++) {
          allConnectedNodes = allConnectedNodes.concat(
            this.state.network.getConnectedNodes(connectedNodes[j])
          );
        }
      }

      // all second degree nodes get a different color and their label back
      for (i = 0; i < allConnectedNodes.length; i++) {
        cloneNodes[allConnectedNodes[i]].color = "rgba(150,150,150,0.75)";
        if (cloneNodes[allConnectedNodes[i]].hiddenLabel !== undefined) {
          cloneNodes[allConnectedNodes[i]].label =
            cloneNodes[allConnectedNodes[i]].hiddenLabel;
          cloneNodes[allConnectedNodes[i]].hiddenLabel = undefined;
        }
      }

      // all first degree nodes get their own color and their label back
      for (let i = 0; i < connectedNodes.length; i++) {
        cloneNodes[connectedNodes[i]].color = undefined;
        if (cloneNodes[connectedNodes[i]]["hiddenLabel"] !== undefined) {
          cloneNodes[connectedNodes[i]].label =
            cloneNodes[connectedNodes[i]]["hiddenLabel"];
          const fontSize = this.state.network.body.nodes;
          fontSize[connectedNodes[i]].options.font.size = 15;
          cloneNodes[connectedNodes[i]]["hiddenLabel"] = undefined;
        }
      }

      // the main node gets its own color and its label back.
      cloneNodes[selectedNode].color = undefined;
      if (cloneNodes[selectedNode]["hiddenLabel"] !== undefined) {
        cloneNodes[selectedNode].label =
          cloneNodes[selectedNode]["hiddenLabel"];
        const fontSize = this.state.network.body.nodes;
        fontSize[selectedNode].options.font.size = 15;
        // this.setState({fontSize})
        cloneNodes[selectedNode]["hiddenLabel"] = undefined;
      }
    } else if (highlightActive === true) {
      // reset all nodes
      for (let nodeId in cloneNodes) {
        cloneNodes[nodeId].color = undefined;
        if (cloneNodes[nodeId]["hiddenLabel"] !== undefined) {
          cloneNodes[nodeId].label = cloneNodes[nodeId]["hiddenLabel"];
          const fontSize = this.state.network.body.nodes;
          fontSize[nodeId].options.font.size = 15;
          this.setState({ fontSize });
          cloneNodes[nodeId]["hiddenLabel"] = undefined;
        }
      }
      highlightActive = false;
    }

    let updateArray = [];
    for (let nodeId in cloneNodes) {
      if (cloneNodes.hasOwnProperty(nodeId)) {
        updateArray.push(cloneNodes[nodeId]);
      }
    }
    if (this.mounted) {
      this.setState({
        graph: {
          nodes: updateArray,
          edges: this.state.graph.edges,
        },
      });
    }
  }

  neighbourhoodHighlightHide(params) {
    let allNodes = this.state.graph.nodes;

    let Nodes = new this.vis.DataSet(allNodes);
    let allNodess = Nodes.get({ returnType: "Object" });
    // let allNodess = allNodes.map(a => {return {...a}})
    this.state.network.canvas.body.container.style.cursor = "default";

    for (var nodeId in allNodess) {
      allNodess[nodeId].color = "rgba(200,200,200,0.5)";
      if (allNodess[nodeId].hiddenLabel === undefined) {
        allNodess[nodeId].hiddenLabel = allNodess[nodeId].label;
        allNodess[nodeId].label = undefined;
      }
    }

    highlightActive = true;
    if (highlightActive === true) {
      // reset all nodes
      for (var nodeIds in allNodess) {
        allNodess[nodeIds].color = undefined;
        if (allNodess[nodeIds].hiddenLabel !== undefined) {
          allNodess[nodeIds].label = allNodess[nodeIds].hiddenLabel;
          const fontSize = this.state.network.body.nodes;
          fontSize[nodeIds].options.font.size = 15;
          this.setState({ fontSize });
          allNodess[nodeIds].hiddenLabel = undefined;
        }
      }
      highlightActive = false;
    }

    var updateArray = [];
    for (var nodeIde in allNodess) {
      if (allNodess.hasOwnProperty(nodeIde)) {
        updateArray.push(allNodess[nodeIde]);
      }
    }
    if (this.mounted) {
      this.setState({
        graph: {
          nodes: updateArray,
          edges: this.state.graph.edges,
        },
      });
    }
  }

  getNetwork = (data) => {
    this.setState({ network: data });
  };
  getEdges = (data) => {
    console.log(data);
  };
  getNodes = (data) => {
    console.log(data);
  };

  // modal functions
  openModal () {
    this.setState({Modalopen: true});
  }

 closeModal() {
  this.setState({Modalopen: false});
  }

  render() {

    return (
      <div>
        <Modal
        isOpen={this.state.Modalopen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        zIndex="9999"
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <Grid>
            { this.state.options &&
            <Fragment>
            <FullscreenExitIcon fontSize="large" onClick={this.closeModal}/>
            <CallSplitIcon fontSize="large" className={this.state.branchingActive ? "selectedIcon" : ""} onClick={() => this.setState({ branchingActive: !this.state.branchingActive})}/>
            <SearchIcon fontSize="large"  className={this.state.options.interaction.zoomView ? "selectedIcon" : ""} onClick={() => this.setState({ options: { ...this.state.options, interaction: { ...this.state.options.interaction, zoomView: !this.state.options.interaction.zoomView}}})}/>
            <PanToolIcon fontSize="large" className={this.state.options.interaction.dragView ? "selectedIcon" : ""} onClick={() => this.setState({ options: { ...this.state.options, interaction: { ...this.state.options.interaction, dragView: !this.state.options.interaction.dragView}}})}/>
            <ReplayIcon fontSize="large" />
            </Fragment>}   
          </Grid>
        {Object.keys(this.props.candcontrib).length &&
            Object.keys(this.state.graph).length && (
              <Graph
                graph={this.state.graph}
                style={this.state.fullscreenStyle}
                options={this.state.options}
                getNetwork={this.getNetwork}
                getEdges={this.getEdges}
                getNodes={this.getNodes}
                events={this.events}
                vis={(vis) => (this.vis = vis)}
              />
            )}
      </Modal>
        <Fragment>
          <Grid>
            <FullscreenIcon fontSize="large" onClick={this.openModal} />
            { this.state.options &&
            <Fragment>
            <CallSplitIcon fontSize="large" className={this.state.branchingActive ? "selectedIcon" : ""} onClick={() => this.setState({ branchingActive: !this.state.branchingActive})}/>
            <SearchIcon fontSize="large"  className={this.state.options.interaction.zoomView ? "selectedIcon" : ""} onClick={() => this.setState({ options: { ...this.state.options, interaction: { ...this.state.options.interaction, zoomView: !this.state.options.interaction.zoomView}}})}/>
            <PanToolIcon fontSize="large" className={this.state.options.interaction.dragView ? "selectedIcon" : ""} onClick={() => this.setState({ options: { ...this.state.options, interaction: { ...this.state.options.interaction, dragView: !this.state.options.interaction.dragView}}})}/>
            <ReplayIcon fontSize="large" />
            </Fragment>}
          </Grid>
          {Object.keys(this.props.candcontrib).length &&
            Object.keys(this.state.graph).length && (
              <Graph
                graph={this.state.graph}
                style={this.state.style}
                options={this.state.options}
                getNetwork={this.getNetwork}
                getEdges={this.getEdges}
                getNodes={this.getNodes}
                events={this.events}
                vis={(vis) => (this.vis = vis)}
              />
            )}
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    candcontrib: state.candcontrib,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCandContributorsThunk: (cid) => dispatch(setCandContributorsThunk(cid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NetworkGraph);
