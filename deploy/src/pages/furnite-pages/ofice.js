export const Office = () => {
    const images = ["ps", "res20-1", "res20", "res24-1", "res24","25"]

    const imageTag = (path) => /*html*/`
        <div class="col-xl-4 col-md-4 col-sm-12 block p-0">
            <img
                class="furn-image "
                src="../src/assets/furnitures/ofis/${path}.jpg"
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