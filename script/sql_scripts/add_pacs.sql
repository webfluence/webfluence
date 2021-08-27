COPY pacs (cycle, fecrecno, pacid, cid, amount, date, realcode, type, di, feccandid) FROM '/Volumes/Black External Drive 1/Webfluence Files/CampaignFin20/pacs20.txt' WITH (FORMAT CSV, QUOTE('|'), DELIMITER(','))

/*PLEASE MAKE SURE YOU CHANGE THE PATH TO THE PATH ON YOUR COMPUTER AND MAKE SURE ITS THE RIGHT FILE*/
