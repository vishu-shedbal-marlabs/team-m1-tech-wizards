import { LightningElement, track} from 'lwc';
import fetchAccount from '@salesforce/apex/AccountRelatedObj.fetchAccount';
import fetchContact from '@salesforce/apex/AccountRelatedObj.getContacts';
import fetchOpportunity from '@salesforce/apex/AccountRelatedObj.fetchOpportunity';
import getClosedWonOpp from '@salesforce/apex/AccountRelatedObj.getClosedWonOpp';
import getClosedLostOpp from '@salesforce/apex/AccountRelatedObj.getClosedLostOpp';
import getAmountClosedWonOpp from  '@salesforce/apex/AccountRelatedObj.getAmountClosedWonOpp';
import fetchCase from  '@salesforce/apex/AccountRelatedObj.fetchCase';
import getOpenCase from  '@salesforce/apex/AccountRelatedObj.getOpenCase'; 
import getClosedCase from  '@salesforce/apex/AccountRelatedObj.getClosedCase'; 

export default class AccountSummary extends LightningElement {
   
    @track acc;
    @track con;
    message;
    msg;
    msg1;
    msg2;
    msg3;
    msg4;
    msg5;
    msg6;
    mesg1;
    mesg2;
    mesg3;
    @track opp;
    @track closedwonofopp;
    @track closedlostopp;
    @track oppamount;
    @track cs;
    @track case;
    @track noopencase;
    @track noclosecase;
    connectedCallback(){
                        fetchAccount()
                        .then(result => {
                                        this.acc = result;

                                        console.log(JSON.stringify(result));
                                        console.log("result",this.acc);
                                        })

                        }

    
    contactFetch(event){
                            this.message = event.target.value;
                            console.log('Contact Id-->'+this.message);
                            fetchContact({accountId : this.message})

                            .then(result => {
                                                this.con = result;

                                                console.log(JSON.stringify(result));
                                                console.log("result1",this.con);
                                            })
                            .catch(error =>{
                            this.error = error;

                                            })

                            this.msg = event.target.value;
                            console.log('Oppoertunity Id-->'+this.msg);
                            fetchOpportunity({accountId : this.msg})
                            .then(result => {
                                              this.opp = result;

                                              console.log(JSON.stringify(result));
                                              console.log("result2",this.opp);
                                            })
                            .catch(error =>{
                                            this.error = error;

                                            })
                            this.msg1 = event.target.value;
                            console.log('Opportunity Id-->'+this.msg1);
                            getClosedWonOpp({accountId : this.msg1})
                            .then(result => {
                                              this.closedwonofopp = result;

                                              console.log(JSON.stringify(result));
                                              console.log("result3",this.closedwonofopp);
                                            })
                            .catch(error =>{
                                            this.error = error;

                                            })
                            this.msg2 = event.target.value;
                            console.log('Opportunity Id-->'+this.msg2);
                            getClosedLostOpp({accountId : this.msg2})
                            .then(result => {
                                              this.closedlostopp = result;

                                              console.log(JSON.stringify(result));
                                              console.log("result4",this.closedlostopp);
                                            })
                            .catch(error =>{
                                            this.error = error;

                                            })
                                            this.mesg1 = event.target.value;
                                            console.log('Amountopp Id-->'+this.mesg1);
                                            getAmountClosedWonOpp({accountId : this.mesg1})
                                            .then(result => {
                                                              this.oppamount = result;
                                
                                                              console.log(JSON.stringify(result));
                                                              console.log("result4",this.oppamount);
                                                            })
                                            .catch(error =>{
                                                            this.error = error;
                                
                                                            })
                                            this.msg = event.target.value;
                                            console.log('Case Id-->'+this.msg);
                                            fetchCase({accountId : this.msg})
                                            .then(result => {
                                                                this.cs = result;
                    
                                                                console.log(JSON.stringify(result));
                                                                console.log("result",this.cs);
                                                            })
                                            .catch(error =>{
                                                            this.error = error;
                    
                                                            })
                                                            this.mesg2 = event.target.value;
                                                            console.log('Case Id-->'+this.mesg2);
                                                            getClosedCase({accountId : this.mesg2})
                                                            .then(result => {
                                                                              this.noclosedcase = result;
                                                                
                                                                              console.log(JSON.stringify(result));
                                                                              console.log("result5",this.noclosedcase);
                                                                            })
                                                            .catch(error =>{
                                                                            this.error = error;
                                                                
                                                                            })
                                                            this.mesg3 = event.target.value;
                                                            console.log('Case Id-->'+this.mesg3);
                                                            getOpenCase({accountId : this.mesg3})
                                                            .then(result => {
                                                                              this.noopencase = result;
                                                                                
                                                                              console.log(JSON.stringify(result));
                                                                              console.log("result6",this.noopencase);
                                                                            })
                                                            .catch(error =>{
                                                                            this.error = error;
                                                                                
                                                                            })
                                        }
}