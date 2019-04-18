import React, {Component} from 'react';
import {SplitButton} from 'primereact/splitbutton';
import {Growl} from 'primereact/growl';

class SplitButtonDemo extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'Update', 
                    icon: 'pi pi-refresh', 
                    command: (e) => {
                        this.growl.show({severity:'info', summary:'Updated', detail:'Data Updated'});
                    }
                },
                {
                    label: 'Delete', 
                    icon: 'pi pi-times',
                    command: (e) => {
                        this.growl.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
                    }
                },
                {
                    label: 'React Website', 
                    icon: 'pi pi-external-link',
                    command:(e) => {
                        window.location.href = 'https://facebook.github.io/react/'
                    }
                },
                {   label: 'Upload', 
                    icon: 'pi pi-upload', 
                    command:(e) => {
                        window.location.hash = "/fileupload"
                    }
                }
            ]
        }

        this.save = this.save.bind(this);
    }
    
    save() {
        this.growl.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>SplitButton</h1>
                        <p>SplitButton groups a set of commands in an overlay with a default command.</p>
                    </div>
                </div>

                <div className="content-section implementation splitbutton-demo">
                    <Growl ref={(el) => this.growl = el}></Growl>

                    <h3 className="first">Basic</h3>
                    <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.state.items}></SplitButton>

                    <h3>Severities</h3>
                    <SplitButton label="Saveeee" icon="pi pi-plus" onClick={this.save} model={this.state.items} className="p-button-secondary" style={{marginRight: '.25em'}}></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.state.items} className="p-button-success" style={{marginRight: '.25em'}}></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.state.items} className="p-button-info"> style={{marginRight: '.25em'}}</SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.state.items} className="p-button-warning" style={{marginRight: '.25em'}}></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.state.items} className="p-button-danger"></SplitButton>
                </div>
            </div>
        )
    }
}
  
export default SplitButtonDemo;