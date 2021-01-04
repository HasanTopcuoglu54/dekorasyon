// resimlerin isimleri
var imagesSrc = ['ps', '1', 'res4-1', 'res10', 'res20-1', 'res21-1']

export const RandomImages = () => {
    const images = imagesSrc.map(name => {
        return /*html*/`
            <div class="item col-xl-4 col-md-6 m-0 p-0">
                <img src='../src/assets/random-images-content/${name}.jpg' class='w-100' />
            </div>
        `
    })

    return images.join(" ")
}