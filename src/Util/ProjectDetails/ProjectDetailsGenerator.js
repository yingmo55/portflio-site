export default function projectDetails 
(name, tools=[], previewSrc='', shortDescription, liveLink='', codeLink='') {
    return {
        title: name[0].toUpperCase() + name.slice(1),
        tools: tools,
        src: previewSrc,
        shortDescription: shortDescription,
        liveLink: liveLink,
        codeLink: codeLink
    }
}