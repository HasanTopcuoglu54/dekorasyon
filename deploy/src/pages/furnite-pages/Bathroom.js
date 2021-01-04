export const Bathroom = () => {
    const images = ['res10', 'res14', 'res14-1', 'res17', 'res17-1','5','6','18',]
    const imageTag = (path) => /*html*/`
        <div class="col-xl-4 col-md-4 col-sm-12 block p-0">
            <img
                class="furn-image "
                src="../src/assets/furnitures/Banyo/${path}.jpg"
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