export const Bad = () => {
    const images = [
        "res2-1",
        "res2",
        "res4-1",
        "res4",
        "res5",
        "res6", 
        "res6-1",
        "res18",
        "res18-1",
        "res19",
        "res21", 
        "res21-1",
        "res23-1",
        "res23", 
        "2",
        "3",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "20",
        "21",
        "24",
        

    ]
    const imageTag = (path) => /*html*/`
        <div class="col-xl-4 col-md-4 col-sm-12 block p-0">
            <img
                class="furn-image "
                src="../src/assets/furnitures/Yatak/${path}.jpg"
                alt="room"
            />
            
        </div>
        `

    return {html: (/*html*/`
        <div class="furn row m-auto mt-5">
            ${
                images.map(img => imageTag(img)).join(" ")
            }
        </div>
    `)}
}