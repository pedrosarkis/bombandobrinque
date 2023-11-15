window.onload = async () => {
   const brinquedosToAdd = await (await fetch('/getBrinquedos')).json();

   const divToAdd = document.getElementById('wa-row-kfmip0dq9xst6o');
   debugger;

   brinquedosToAdd.products.forEach(element => {
    const imageType = getImageType(element.images[0]);

    const html = `<div class="wa-subcontainer-wrapper  col-xs-12 col-sm-2 col-md-2 col-lg-2 " >
    <div id="wa-sub-container-kfmip0dq3wjdds">
        <div id="wa-row-kfmip0dq9xsr8o" class="row row-align  ">
            <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
                <div id="wa-comptext-kfmip0dq8vhayw" class="wa-comptext clearfix">
                    <h1 style="text-align: center;"><span style="color: #338cfd; font-size: 14px; font-family: 'Open Sans', Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif;">${element.title}</span></h1>
                    
                </div>
            </div>
        </div>
        <div class="wa-container-vspacer col-xl-12"></div>
        <div id="wa-row-kfmip0dq9xsrdc" class="row row-align  ">
            <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 "  data-ratioWidth="400" data-ratioHeight="300" >
                <a class="wa-gal-link" href="/wa_p_albums/p_album_jyypl0in0/link/gal_pt.html" data-gal="wa_p_albums/p_album_jyypl0in0/link/gal_pt.json" >
                    <img id="wa-compimage-kfmip0dq88mpug" alt="" class="wa-image-component  wafxWow zoomIn" src=data:${imageType};base64,${element.images[0]}>

                </a></div>
        </div>
        <div class="wa-container-vspacer col-xl-12"></div>
        <div id="wa-row-kfmip0dq9xstbc" class="row row-align  ">
            <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
                <div id="wa-compbutton-kfmip0dq8ditvs-halign">  <a id="wa-compbutton-kfmip0dq8ditvs" href="${element.title.replace(' ', '')}.html"  onclick="return true;"  class="btn btn-primary wa-compbutton "  >SAIBA MAIS!</a>
                </div></div>
        </div>
    </div>
</div>`
debugger;
try {
    const generateHtml = fetch('/writeHTML', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(element)
    });
} catch (error) {
    console.log(error, 'error generating html')
}


    divToAdd.insertAdjacentHTML('beforebegin', html);
});

}

function getImageType(base64) {
    const prefix = base64.substring(0, 15); // Pega os primeiros 15 caracteres

    if (prefix.includes('/9j/')) {
        return 'image/jpeg';
    } else if (prefix.includes('iVBORw0KGgo')) {
        return 'image/png';
    } else if (prefix.includes('R0lGODdh') || prefix.includes('R0lGODlh')) {
        return 'image/gif';
    } else {
        return 'image/jpeg'; // Tipo padrão se não for identificado
    }
}