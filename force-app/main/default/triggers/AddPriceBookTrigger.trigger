trigger AddPriceBookTrigger on Opportunity (before insert) {
	List<Pricebook2> stdPBL = [select id from Pricebook2 where IsActive=true];
		if(!stdPBL.isEmpty()){
			for(Opportunity opp: Trigger.new){
				opp.PriceBook2Id = stdPBL[0].id;
			}
		}
	}


    