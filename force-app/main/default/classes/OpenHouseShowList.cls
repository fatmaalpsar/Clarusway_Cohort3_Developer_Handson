public with sharing class OpenHouseShowList {
    
        @AuraEnabled (cacheable=true scope='global')
        public static Open_House_Show__c[] GetRecords() {
            List<Open_House_Show__c> lstHouses = new List<Open_House_Show__c>();
        try {
            // Create a list of House records from a SOQL query
            List<Open_House_Show__c> queryResults = [
                SELECT
                   Name,
                   Show_Date__c,
                   Start_Time__c,
                   End_Time__c,
                   Remaining_Number_Visitors__c
                   FROM Open_House_Show__c
                   WHERE Show_Date__c >= TODAY];
            lstHouses.addAll(queryResults);
        }
        // Code to handle exception
        catch (Exception e) {
           throw new AuraHandledException(e.getMessage());
        }
        return lstHouses;
    }
        
        }
    
    