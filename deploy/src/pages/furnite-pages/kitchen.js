export const Kitchen = () => {
    const images = ['res9', 'res11', 'res11-1', 'res22', 'res25', 'res25-1', '1'
    , '4'
    , '7'
    , '8'
    , '9'
    , '10'
    , '22'
    , '23']
    const imageTag = (path) => /*html*/`
        <div class="col-xl-4 col-md-4 col-sm-12 block p-0">
            <img
                class="furn-image "
                src="../src/assets/furnitures/Mutfak/${path}.jpg"
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