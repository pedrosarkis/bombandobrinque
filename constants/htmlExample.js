const { forEach } = require("lodash");

module.exports =  modificateHtml = (title, description, images) => {
    let imagesHtml = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); grid-gap: 10px;">'; // Contêiner grid
    images.forEach((imageBase64) => {
        imagesHtml += `
            <div style="width: 250px; height: 250px;"> <!-- Caixa para cada imagem com tamanho fixo -->
                <a href="#" title="${title}">
                    <img src="data:image/jpeg;base64,${imageBase64}" alt="${title}" style="width: 100%; height: 100%; object-fit: contain;">
                </a>
            </div>
        `;
    });
    imagesHtml += '</div>'; // Fecha o contêiner grid
    
    
    return `<!DOCTYPE html>
    <html lang="pt">
    
    <!-- Mirrored from www.bombandobrinque.com.br/mini-kid-play-baby.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 28 Oct 2023 04:47:10 GMT -->
    <head>
        <meta charset="utf-8">
        <title>${title} | Bombando Brinque</title>
    
        <meta name="description" content="Locação de Tobogã e Pula-Pula Selva Mágica para festas e eventos em Florianópolis e região! Melhor preço, consulte."/>
        <meta name="keywords" content=""/>
    
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
        <style>
            html body {width:100%; height:100%;background-position:center center;background-image : url('wa_images/wrapp1b0e.jpg?v=1ekgmuk');}
            div#preloader { position: fixed; left: 0; top: 0; z-index: 999; width: 100%; height: 100%; overflow: visible; background: white no-repeat center center; }
        </style>
    
    
        <script>
            var WaComponentContext = {};
            var WaPageContext = {};
            var WaContext = {};
            WaContext.app_version="1.6.14"
            WaContext.app_revision="c94daa8a8"
            WaContext.preview=false
            WaPageContext.lang="pt_br"
            WaPageContext.lang_filename="pt"
    
        </script>
        <script src="wa_js/wa_vanilla3f43.js?v=125&amp;" ></script>
        <link rel="shortcut icon" type="image/png" href="wa_images/favicon_1.png" />
        <!-- LiveZilla Chat Button Link Code (ALWAYS PLACE IN BODY ELEMENT) --><!-- LiveZilla Tracking Code (ALWAYS PLACE IN BODY ELEMENT) --><div id="livezilla_tracking" style="display:none"></div><script type="text/javascript">
        var script = document.createElement("script");script.async=true;script.type="text/javascript";var src = "https://www.webchatonline.com.br/atendimento/server.php?ws=d3d3LmJvbWJhbmRvYnJpbnF1ZS5jb20uYnI_&amp;rqst=track&amp;output=jcrpt&amp;hcgs=MQ__&amp;htgs=MQ__&amp;fbpos=22&amp;fbml=0&amp;fbmt=0&amp;fbmr=0&amp;fbmb=0&amp;fbw=190&amp;fbh=190&amp;nse="+Math.random();setTimeout("script.src=src;document.getElementById('livezilla_tracking').appendChild(script)",1);</script><noscript><img src="https://www.webchatonline.com.br/atendimento/server.php?ws=d3d3LmJvbWJhbmRvYnJpbnF1ZS5jb20uYnI_&amp;rqst=track&amp;output=nojcrpt&amp;hcgs=MQ__&amp;htgs=MQ__&amp;fbpos=22&amp;fbml=0&amp;fbmt=0&amp;fbmr=0&amp;fbmb=0&amp;fbw=190&amp;fbh=190" width="0" height="0" style="visibility:hidden;" alt=""></noscript><!-- http://www.LiveZilla.net Tracking Code --><div style="display:none;"><a href="javascript:void(window.open('https://www.webchatonline.com.br/atendimento/chat.php?ws=d3d3LmJvbWJhbmRvYnJpbnF1ZS5jb20uYnI_&amp;hcgs=MQ__&amp;htgs=MQ__','','width=550,height=700,left=0,top=0,resizable=yes,menubar=no,location=no,status=yes,scrollbars=yes'))" class="lz_fl"><img id="chat_button_image" src="https://www.webchatonline.com.br/atendimento/image.php?ws=d3d3LmJvbWJhbmRvYnJpbnF1ZS5jb20uYnI_&amp;id=1&amp;type=overlay" width="190" height="190" style="border:0px;" alt="LiveZilla Live Chat Software"></a></div><!-- http://www.decolarhost.com.br/livezilla Chat Button Link Code -->
    </head>
    <body>
        <div id="preloader"></div>
        <a id="wa-anchor-top" title="Top anchor"></a>
        <div id="wa-gallery" class="blueimp-gallery blueimp-gallery-controls">
            <div class="slides"></div>
            <p class="title">&nbsp;</p>
            <a class="prev">‹</a>
            <a class="next">›</a>
            <a class="close">×</a>
            <a class="play-pause"></a>
            <ol class="indicator"></ol>
        </div>
        <ul class="wa-sharebar" data-wa-size="40px" data-wa-spacing="0px" style="z-index:100;">
            <li class="facebook wa-button-sharebar" data-wa-url="https://www.facebook.com/elisane.bombandobrinque.79" title="Facebook">facebook</li>
            <li class="instagram wa-button-sharebar" data-wa-url="https://www.instagram.com/bombando_brinque/" title="Instagram">instagram</li>
        </ul>
        <div id="wa-container-wrapper-kgtzfnjw6pxedk" >
            <div id="wa-container-kgtzfnjw6pxedk" class="container-fluid  " >
                <div id="wa-row-kgtzfnjw7f0b08" class="row row-align  ">
                    <div class="wa-subpage-wrapper  col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
                        <div id="wa-compsubpage-kgtzfnjw71sfog">
                            <div id="wa-row-jyormxdb5ne4iw" class="row row-align  ">
                                <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 wa-valign-middle " >
                                    <div id="wa-compmenu-jyorwgx63wjtnc" class="wa-compmenu wa-menu-init">
                                        <nav class="navbar navbar-default wa-always-on-top wa-aot-fluid wa-menu-centered" style="margin:0px;">
                                            <div class="container-fluid">
                                                <!-- Brand and toggle get grouped for better mobile display -->
                                                <div class="navbar-header">
                                                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#wa-collapse-wa-compmenu-jyorwgx63wjtnc" aria-expanded="false">
                                                        <span class="icon-bar"></span>
                                                        <span class="icon-bar"></span>
                                                        <span class="icon-bar"></span>
                                                    </button>
                                                    <a href="index-2.html"  onclick="return true;"  class="navbar-brand"  style="font-weight:700" >
                                                    <img class="wa-brand-logo" alt="brand-logo" style="display:inline-block;height:35px;" src="wa_images/favicon.png">
                                                    <span >HOME</span>
                                                    </a>
                                                </div>
                                                <div class="collapse navbar-collapse" id="wa-collapse-wa-compmenu-jyorwgx63wjtnc">
                                                    <ul class="nav navbar-nav">
                                                        <li ><a href="quem-somos.html"  onclick="return true;"  >QUEM SOMOS</a></li>
                                                        <li ><a href="escolha-seus-brinquedos.html"  onclick="return true;"  >LOCAÇÃO DE BRINQUEDOS</a></li>
                                                        <li ><a href="escolha-seus-servicos.html"  onclick="return true;"  >SERVIÇOS</a></li>
                                                        <li ><a href="contato.html"  onclick="return true;"  >CONTATO</a></li>
                                                    </ul>
                                                </div><!-- /.navbar-collapse -->
                                            </div><!-- /.container-fluid -->
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="wa-container-wrapper-kgtzfnjw6pwvkw" >
            <div id="wa-container-kgtzfnjw6pwvkw" class="container  " >
                <div id="wa-row-kgtzfnjw6x52hc" class="row  ">
                    <div class="col-xl-12 wa-item-rowspacer"></div>
                </div>
                <div class="wa-container-vspacer col-xl-12"></div>
                <div id="wa-row-kgtzfnjw7f0cz4" class="row row-align  ">
                    <div class="wa-subcontainer-wrapper  col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
                        <div id="wa-sub-container-kgtzfnjw6px840">
                            <div id="wa-row-kgtzfnjw7f0a40" class="row row-align  ">
                                <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
                                    <div id="wa-comptext-kgtzfnjw6twbqg" class="wa-comptext clearfix">
                                        <h1 style="text-align: center;"><span style="font-size: 25px; font-family: 'Baloo Chettan', Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif; color: #338cfd;">${title}</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div class="wa-container-vspacer col-xl-12"></div>
                            <div id="wa-row-kgtzfnjw6x52n4" class="row  ">
                                <div class="col-xl-12 wa-item-rowspacer"></div>
                            </div>
                            <div class="wa-container-vspacer col-xl-12"></div>
                            <div id="wa-row-kgtzfnjw7f0aag" class="row row-align  ">
                                <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 "  data-typeCalculHeight="aft_load" >
                                    <div id="wa-compgallery-kgtzfnjw7gu97s" class="row wa-image-gallery-row-container" >
                                        <div id="wa-image-gallery-col-container-kgtzfnjw7gu97s" class="col-xl-12">
                                            <div id="wa-image-gallery-row-kgtzfnjw7gu97s" class="row wa-image-gallery-tobind ">
                                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 "> 
                                                   ${imagesHtml}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wa-container-vspacer col-xl-12"></div>
                            <div id="wa-row-kgtzfnjw7f09r4" class="row row-align  ">
                                <div class="wa-subpage-wrapper  col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
                                    <div id="wa-compsubpage-kgtzfnjx71sfxk">
                                        <div id="wa-row-jz8r09hu8hzx4w" class="row row-align  ">
                                            <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
                                                <div id="wa-comptext-jz8r0dar8r8kio" class="wa-comptext clearfix">
                                                    <p style="text-align: right;"><img style="margin: 10px;" src="wa_images/646737b49.png?v=1el3cv2" width="20" height="20" alt="" title="" /> <span style="font-size: 10px;">CLIQUE NA IMAGEM PARA AMPLIAR / VER TODAS</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wa-container-vspacer col-xl-12"></div>
                            <div id="wa-row-kgtzfnjw7f0agw" class="row row-align  ">
                                <div class="wa-subpage-wrapper  col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
                                    <div id="wa-compsubpage-kgtzfnjx71seew">
                                        <div id="wa-row-jz8rd5cf8krm1c" class="row row-align  ">
                                            <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 wa-valign-middle " >
                                                <div id="wa-compbutton-padwrapper-jz8rd5cf76bm94" class="wa-compbutton-padwrapper ">
                                                    <div id="wa-compbutton-jz8rd5cf76bm94-halign">	<a id="wa-compbutton-jz8rd5cf76bm94" href="https://api.whatsapp.com/send?phone=5548984613106&amp;text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20loca%C3%A7%C3%A3o%20de%20brinquedos%20%3A)"  onclick="return true;"  class="btn btn-primary wa-compbutton "  target="_blank" >Solicite seu Orçamento Agora!</a>
                                                    </div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wa-container-vspacer col-xl-12"></div>
                            <div id="wa-row-kgtzfnjw7f09xk" class="row row-align  ">
                                <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
                                    <div id="wa-comptext-kgtzfnjx6tw7js" class="wa-comptext clearfix">
                                        <p class="wa_style_jyoqycgx5q3kmo" style="text-align: center;"><span style="color: #5c5c5c; font-size: 20px;">${title}</span></p>
                                        <p> ${description}</p>
                                        <p
                                         class="wa_style_jyoqycgx5q3kmo"><span style="color: #5c5c5c;">Clique para saber mais sobre os brinquedos</span></p>
                                        <p class="wa_style_jyoqycgx5q3kmo"><span style="color: #5c5c5c;">Buscas relacionadas: aluguel de cama elástica, brinquedos inflável aluguel, locação brinquedos festas, cama elástica para locação, aluguel brinquedo inflável, locação cama elástica, aluguel cama elástica, locação pula-pula gigante, aluguel pula-pula gigante.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wa-container-vspacer col-xl-12"></div>
                <div id="wa-row-kgtzfnjw6x511c" class="row  ">
                    <div class="col-xl-12 wa-item-rowspacer"></div>
                </div>
            </div>
        </div>
        <div id="wa-container-wrapper-kgtzfnjw6pwwh4" >
            <div id="wa-container-kgtzfnjw6pwwh4" class="container-fluid  " >
                <div id="wa-row-kgtzfnjw7f0c2w" class="row row-align  ">
                    <div class="wa-subpage-wrapper  col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
                        <div id="wa-compsubpage-kgtzfnjx71seo0">
                            <div id="wa-row-jz1ik8wp5joe40" class="row  ">
                                <div class="col-xl-12 wa-item-rowspacer"></div>
                            </div>
                            <div class="wa-container-vspacer col-xl-12"></div>
                            <div id="wa-row-jyr9rp3n43623k" class="row row-align  ">
                                <div class="wa-subcontainer-wrapper  col-xs-12 col-sm-7 col-md-7 col-lg-3 " >
                                    <div id="wa-sub-container-jyr9s4arbu36i8">
                                        <div id="wa-row-jyr9s4ar7oda20" class="row row-align  ">
                                            <div class="hidden-xs col-xs-12 col-sm-4 col-md-4 col-lg-7 " >
                                            </div>
                                            <div class=" col-xs-12 col-sm-8 col-md-8 col-lg-5 " >
    
                                                <img id="wa-compimage-jyr9sigr5m22sg" alt="" class="wa-image-component " src="wa_images/footer-logo_1c21e.png?v=1ekgmul">
    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix visible-xs "></div>
                                <div class="wa-subcontainer-wrapper  col-xs-12 col-sm-5 col-md-5 col-lg-9 " >
                                    <div id="wa-sub-container-jyr9s4gabu38ao">
                                        <div id="wa-row-jyr9s4ga7od7dc" class="row row-align  ">
                                            <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
                                                <div id="wa-comptext-jyr9ty73752h8w" class="wa-comptext clearfix">
                                                    <p style="text-align: center;"><img style="margin: 10px;" src="wa_images/local-rc21e.png?v=1ekgmul" width="30" height="30" alt="" title="" /> <span style="font-family: 'Baloo Chettan', Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif; color: #338cfd;">FLORIANÓPOLIS - SC / SÃO JOSÉ - SC / PALHOÇA - SC / BIGUAÇU - SC / SANTO AMARO - SC / ANTÔNIO CARLOS - SC</span></p>
                                                    <p style="text-align: center;"><img style="margin: 10px;" src="wa_images/zap-rosac21e.png?v=1ekgmul" width="30" height="30" alt="" title="" /> <span style="font-family: 'Baloo Chettan', Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif; color: #338cfd;"> (48) 98461-3106  / 98473-6300</span></p>
                                                    <p style="text-align: center;"><img style="margin: 10px;" src="wa_images/fone-rosac21e.png?v=1ekgmul" width="30" height="30" alt="" title="" /> <span style="font-family: 'Baloo Chettan', Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif; color: #338cfd;">(48) 3357-0157</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wa-container-vspacer col-xl-12"></div>
                            <div id="wa-row-jyr9rete7od8sw" class="row row-align  ">
                                <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 "  data-ratioWidth="2154" data-ratioHeight="158" >
    
                                    <img id="wa-compimage-jyr9rgmrbls8q0" alt="" class="wa-image-component " src="wa_images/footer-teste1e5b.jpg?v=1ekm1ms">
    
                                </div>
                            </div>
                            <div class="wa-container-vspacer col-xl-12"></div>
                            <div id="wa-row-jyr9uglf4363s8" class="row row-align  ">
                                <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
                                    <div id="wa-comptext-jyr9ui8t70y7e8" class="wa-comptext clearfix">
                                        <p style="text-align: center;"><span style="color: #ffffff;"><strong>Bombando Brinque</strong> Copyright © 2020 - Todos os direitos reservados. <em>Desenvolvido e Hospedado por <strong><a style="color: #ffffff;" title="" href="https://www.decolar.host/locacao-de-sites-prontos/"  onclick="return true;"  target="_blank">Decolar Host</a></strong></em></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a id="wa-anchor-bottom" title="Bottom anchor"></a>
        <link rel="stylesheet" href="wa_bootstrap/css/bootstrap.min7add.css?v=125"/>
        <link rel="stylesheet" href="wa_general7add.css?v=125"/>
        <link rel="stylesheet" href="wa_style_global1c07.css?v=17"/>
        <link rel="stylesheet" href="wa_webfont_global1c07.css?v=17"/>
        <link rel="stylesheet" href="wa_animate/animate.min7add.css?v=125"/>
        <link rel="stylesheet" href="wa_share/wa-share7add.css?v=125"/>
        <link rel="stylesheet" href="wa_gallery/css/blueimp-gallery.min7add.css?v=125"/>
        <link rel="stylesheet" href="wa_css/pages-page71_pt1ee8.css?v=78"/>
        <link rel="stylesheet" href="wa_menu/menu7add.css?v=125"/>
        <script>
            document.getElementById("preloader").style.display = 'none';
        </script>
        <script src="wa_bootstrap/js/jquery.min3f43.js?v=125&amp;" ></script>
        <script>var wa$ = jQuery.noConflict()</script>
        <script src="wa_js/wa_bootstrap_util3f43.js?v=125&amp;" ></script>
        <script src="wa_bootstrap/js/bootstrap.min3f43.js?v=125&amp;" ></script>
        <script src="wa_js/waVariables_pt3afa.js?v=31&amp;" ></script>
        <script src="wa_gallery/js/blueimp-gallery.min3f43.js?v=125&amp;" ></script>
        <script src="wa_gallery/js/wa_galleries3f43.js?v=125&amp;" ></script>
        <script src="wa_share/wa-share3f43.js?v=125&amp;" ></script>
        <script src="wa_animate/wow.min3f43.js?v=125&amp;" ></script>
        <script src="wa_menu/wa_menu3f43.js?v=125&amp;" ></script>
        <script src="wa_menu/wa_search3f43.js?v=125&amp;" ></script>
        <script src="wa_js/validator.min3f43.js?v=125&amp;" ></script>
        <script src="wa_js/wa_common3f43.js?v=125&amp;" ></script>
        <script src="wa_js/parallax3f43.js?v=125&amp;" ></script><script src="wa_js/lazyload.min3f43.js?v=125&amp;" ></script>
        <script>let wow = new WOW({boxClass:'wafxWow',animateClass: 'animated',offset:0,mobile:true,live:true,});
        wow.init();
        let waGridLazyLoadInstance = new LazyLoad({elements_selector: ".lazy"});
        </script>
    </body>
    
    <!-- Mirrored from www.bombandobrinque.com.br/mini-kid-play-baby.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 28 Oct 2023 04:47:13 GMT -->
    </html>`
};