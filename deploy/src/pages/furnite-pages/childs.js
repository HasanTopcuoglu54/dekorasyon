export const Childs = () => {
    const images = ["res12-1", "res12", "res13-1", "res13"]

    const imageTag = (path) => /*html*/`
        <div class="col-xl-4 col-md-4 col-sm-12 block p-0">
            <img
                class="furn-image "
                src="../src/assets/furnitures/çocuk/${path}.jpg"
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