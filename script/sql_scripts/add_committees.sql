COPY committees (cycle, cmte_id, pacshort, affiliate, ultorg, recipid, recipcode, feccandid, party, primcode, source, sensitive, "foreign", active) FROM '/Volumes/Black External Drive 1/Webfluence Files/CampaignFin20/cmtes20.txt' WITH (FORMAT CSV, QUOTE('|'), DELIMITER(','))

/*PLEASE MAKE SURE YOU CHANGE THE PATH TO THE PATH ON YOUR COMPUTER AND MAKE SURE ITS THE RIGHT FILE*/
