export default class projectDetails {
    constructor(name, tools=[], previewSrc='', shortDescription, longDescription=''){
        this.title = name;
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

