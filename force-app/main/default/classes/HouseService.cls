public with sharing class HouseService {
    @AuraEnabled(cacheable=true)
    public static List<Open_House_Show__c> getRecords() { 
        List<Open_House_Show__c> lstHouses = new List<Open_House_Show__c>();
        try {
            // Create a list of House records from a SOQL query
            List<Open_House_Show__c> queryResults = [
                SELECT
                   Id,
                   Name,
                   Street__c,
                   State__c, 
                   City__c,
                   Postal_code__c,
                   Is_Published__c
                   FROM Open_House_Show__c
                   WHERE Is_Published__c = true];
            lstHouses.addAll(queryResults);
        }
        // Code to handle exception
        catch (Exception e) {
           throw new AuraHandledException(e.getMessage());
        }
        return lstHouses;
    }
}