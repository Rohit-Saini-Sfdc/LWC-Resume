import { LightningElement, api } from 'lwc';

export default class MyResumeHeader extends LightningElement {
    @api socialDetails
    @api userDetails
    @api profileImage

    get phoneLink(){
        return `tel:${this.userDetails.PHONE}`
    }
    get emailLink() {
        return `mailto:${this.userDetails.EMAIL}`
    }
    get locationLink() {
        return `https://maps.google.com/?q=${this.userDetails.LOCATION}`
    }
}