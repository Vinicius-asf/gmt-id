(()=>{
    const runButton = document.getElementById("run");
    const moduleInfoArray = document.getElementsByClassName("module_info");
    const moduleTitle = moduleInfoArray[0].innerHTML.split(" ")[0];
    const [moduleComponent, moduleLvl] = moduleInfoArray[2].innerHTML.split("/")
    const moduleTable = document.getElementsByClassName("module_table")[0];
    // GMT ID Creation: [TYPE]-[LEVEL]-[COMPONENT]-[ID]
    const createGMTID = (moduleID) => {
        return [moduleTitle,moduleLvl,moduleComponent,moduleID].join("-");
    }
    // return the type of the given artifact: ["Information","Requirement"]
    const getArtifactType = (artifact) =>{
        return artifact.children[3].textContent
    }
    // adds the GMT ID to the given artifact element
    const addGMTIDToArtifact = (artifact) =>{
        artifact.children[1].innerHTML = createGMTID(artifact.children[0].textContent)
    }
    // adds a listener to the RUN button, which updates the GMT ID
    runButton.addEventListener("click", ()=>{
        Array.from(moduleTable.children[1].children).map(artifact=>{
            if (getArtifactType(artifact) == "Requirement"){
                addGMTIDToArtifact(artifact)
            }
        })
    });
})();