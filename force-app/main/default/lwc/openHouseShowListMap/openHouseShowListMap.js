import { LightningElement, wire } from "lwc";
import getHouses from "@salesforce/apex/HouseService.getRecords";
export default class HousingMap extends LightningElement {
    mapMarkers;
    error;
    @wire(getHouses)
    wiredHouses({ error, data }) {
        if (data) {
    // We are using Javascript Map function to transform the
      this.mapMarkers = data.map((element) => {
        return {
          location: {
            Street: element.Street__c,
            City: element.City__c,
            State: element.State__c,
            PostalCode: element.Postal_code__c,
            Country: element.Country__C
          },
          title: element.Name
        };
      });
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.mapMarkers = undefined;
    }
  }
}