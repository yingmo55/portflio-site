export default class SkillDetails {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this._skills = []; 
    }
    get skills() {
        return this._skills;
    }

    set skills([name, src=null]) {
        this.skills.push({name: name,src: src});
    }

    getSkills () {
        return {
            title: this.title,
            description: this.description
        }
    }
}