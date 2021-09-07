trigger AddPriceBookTrigger on Opportunity (before insert) {
	List<Pricebook2> selectPB = [select id from Pricebook2 where IsActive=true];
		if(!selectPB.isEmpty()){
			for(Opportunity opp: Trigger.new){
				opp.PriceBook2Id = selectPB[0].id;
			}
		}
	}


    