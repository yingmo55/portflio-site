export default function projectDetails 
(name, tools=[], previewSrc='', shortDescription, longDescription='', liveLink='', codeLink='') {
    return {
        title: name[0].toUpperCase() + name.slice(1),
        tools: tools,
        src: previewSrc,
        shortDescription: shortDescription,
        longDescription: longDescription,
        liveLink: liveLink,
        codeLink: codeLink
    }
}