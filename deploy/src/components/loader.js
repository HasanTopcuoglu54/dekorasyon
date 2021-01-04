export const Loader = () => {
    return (`

    <div class="loader">
        
        
            ${/**buraya html kodlarını yaz */""}
            <div class="loading">
                
            </div>
            <div class="keys">
                <span style="color:orangered; font-weight:bold;">Ecmel</span>Mobilya ve Dekorasyon
         </div>
    </div>
        
        <style>
            ${/**burayada css kodlarını yaz */""}
            .keys
            {
                font-weight:bold;
                font-size:24px;
                float:right;
                margin-top:15rem;
                margin-right:2rem;
                color:white;
            }
            h1
            {
                font-weight:bold;
                color:white;
                margin-top:2rem;                
            }
            .loader {
                font-size:40px;
                margin:auto;
                position:fixed;
                background: black;
                width: 100%;
                left: 0; right: 0;
                z-index:44;
                bottom: 0;
                top: 0;
                border-radius:0px;
                text-align:center;
                background-image:url("../src/assets/header-image.jpg");
                background-repeat:no-repeat;
                background-position:3px;
                opacity:1;
                
            }
            .loader .loading
            {
                border-radius:50% 50%;
                border:16px solid black;
                background-color:transparent;
                border-top: 16px solid white;
                width: 120px;
                height: 120px;
                -webkit-animation: spin 4s linear infinite; /* Safari */
                animation: spin 2s linear infinite;
                margin:auto;
                margin-top:16rem;
            }
            @-webkit-keyframes spin {
                0% { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
              }
              
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
        </style>
    `)
}