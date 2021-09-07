@isTest

private class ApexTestClass {

    

    @isTest(seeAllData=true)

    static  void validateTriggerPriceBook() {
        Opportunity opp = new Opportunity(Name = 'Checking Test Class', AccountId = '001p000000suQSYAA2',
        CloseDate = Date.today().addMonths(1), StageName = 'New');
        insert opp;
        Opportunity op = [SELECT Id,Pricebook2Id FROM Opportunity WHERE Id=:opp.Id];
        System.assertEquals('01s0T0000005hoLQAQ', op.Pricebook2Id);
    }
}