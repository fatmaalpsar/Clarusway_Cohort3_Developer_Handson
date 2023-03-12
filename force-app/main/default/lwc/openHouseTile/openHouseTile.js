import { LightningElement, api } from 'lwc';
import homeResources from '@salesforce/resourceUrl/ursus_park';
export default class OpenHouseTile extends LightningElement {
	@api home;
	appResources = {
		homeLogo: `${homeResources}/smallhome.png`,
	};
    handleOpenRecordClick() {
        const selectEvent = new CustomEvent('homeview', {
            detail: this.home.Id
        });
        this.dispatchEvent(selectEvent);
    }
}