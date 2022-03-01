export default class projectDetails {
    constructor(name, tools=[], previewSrc='', shortDescription, longDescription=''){
        this.title = name[0].toUpperCase() + name.slice(1) ;
        this.tools = tools;
        this.previewSrc = previewSrc; //src
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
    }
    
    getProject() {
        return {
            title: this.title,
            tools: this.tools,
            src: this.previewSrc,
            shortDescription: this.shortDescription,
            longDescription: this.longDescription
        }
    }
}

