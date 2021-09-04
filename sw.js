/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/07/18/hello-world/index.html","3eab59e5ae4e19ce2d21c7cb4a903e95"],["/2021/08/11/computer consistency/image-20210703135939218.png","da94ed53774d75628ea26c41e89078dc"],["/2021/08/11/computer consistency/image-20210703140650621.png","970c9cfb0012395649545190093a76eb"],["/2021/08/11/computer consistency/image-20210703140736593.png","c889811f79499e680710a081cfeb0132"],["/2021/08/11/computer consistency/image-20210703171729441.png","95044d9697dcf919799a385e0799d3dd"],["/2021/08/11/computer consistency/image-20210704213058727.png","52b4810d698130344c993efb81ba381a"],["/2021/08/11/computer consistency/image-20210708095830330.png","08bf1cfbc29f4015138d39f0b27a129c"],["/2021/08/11/computer consistency/image-20210709141220559.png","2d98a8cca03df310a303f02b74ca5354"],["/2021/08/11/computer consistency/image-20210709153318043.png","313f6a409fec2235fe5af18d3f872e32"],["/2021/08/11/computer consistency/image-20210713171628279.png","23dfdba78ff77d28a783fe7af3e94c06"],["/2021/08/11/computer consistency/image-20210713171807241.png","6846940abf8e40125a994528adc6d33a"],["/2021/08/11/computer consistency/image-20210809162200577.png","bbca6027b4a2effbb5995aacf4200690"],["/2021/08/11/computer consistency/image-20210809163907436.png","6937c589c628c64fd9ed1f0c4c629b4e"],["/2021/08/11/computer consistency/image-20210809163939262.png","2108218e8f6e5c48a19e40f9b40f1fd7"],["/2021/08/11/computer consistency/image-20210809164028137.png","f411985f7d754c6ea34f5caca0b138a5"],["/2021/08/11/computer consistency/image-20210810121018260.png","b4b06c6a2895a3b156b99d3275247059"],["/2021/08/11/computer consistency/image-20210810121310702.png","3bab8d2e3ff448c4ada90f2bf03084fe"],["/2021/08/11/computer consistency/image-20210810121731326.png","517b656d1ccaf8b9b7280905ea9c2a44"],["/2021/08/11/computer consistency/image-20210810122335503.png","aeab6330114bb23fd075e619db82c7dd"],["/2021/08/11/computer consistency/image-20210810150919742.png","eca00f8d1e8a9f326217f8de6eb72b65"],["/2021/08/11/computer consistency/image-20210810151140881.png","18cb6541059e9ee83636e136039a90a3"],["/2021/08/11/computer consistency/image-20210810151735175.png","e38acd05789305f461627a2ad30dea96"],["/2021/08/11/computer consistency/image-20210810160616306.png","2baf18270951b981bdadfdbebccd1bb4"],["/2021/08/11/computer consistency/image-20210810162244763.png","a9d5599f9f753b9c1c7e58c7bb83aca7"],["/2021/08/11/computer consistency/image-20210810162550317.png","90efb0c3448839c06bacf2383402a90f"],["/2021/08/11/computer consistency/image-20210810162635081.png","a97b53b58361d517bb747bbaf737ee31"],["/2021/08/11/computer consistency/image-20210810162729690.png","32aa084e48ecbe5e5fc39da4a98227c7"],["/2021/08/11/computer consistency/image-20210810163050894.png","faaacff1e887884773e8204822b7e53c"],["/2021/08/11/computer consistency/image-20210810164422809.png","faa9a0c7ad2b21e6ced5cefe0c20458b"],["/2021/08/11/computer consistency/image-20210810164709244.png","3aa0dfb9fe7689103d4528f99b2bd43b"],["/2021/08/11/computer consistency/image-20210810164824784.png","e0016f6224b16eeacf8b43504773249f"],["/2021/08/11/computer consistency/image-20210810165827132.png","f88507b8e00e0bc4e5f1af12984a8f00"],["/2021/08/11/computer consistency/image-20210810165907725.png","f88507b8e00e0bc4e5f1af12984a8f00"],["/2021/08/11/computer consistency/image-20210811154301863.png","8e8a8d706d1228a12aab86b8ed4061be"],["/2021/08/11/computer consistency/image-20210811155328449.png","643b047100af63557740b530de2df3b3"],["/2021/08/11/computer consistency/image-20210811155339260.png","7123123dafd5a684a367fe9264552450"],["/2021/08/11/computer consistency/image-20210811163455754.png","bb39e537a7e0cf9151cdcdfe1a4d01e3"],["/2021/08/11/computer consistency/image-20210811163634876.png","36f4b5b1dc996c7487e37c026d12e3c4"],["/2021/08/11/computer consistency/image-20210813132505956.png","02995739e478a589a6a0e2cc6afd3be9"],["/2021/08/11/computer consistency/image-20210813140742705.png","04136c9c9582d1ae4e2973255ce6da90"],["/2021/08/11/computer consistency/image-20210813141014601.png","9dca258046156d8bbe1bdec3755d3a85"],["/2021/08/11/computer consistency/image-20210817153244643.png","5cf098e3dd79f91fcf59d1b3da5bf926"],["/2021/08/11/computer consistency/image-20210817153505139.png","1092820b53aea18ca05fc9e35fad3298"],["/2021/08/11/computer consistency/image-20210817153757724.png","6ecca559d516484e52e2d6bb5e5f59ce"],["/2021/08/11/computer consistency/image-20210817154306671.png","57e5a129ab11985bcf30a01fc0c737e4"],["/2021/08/11/computer consistency/image-20210817154445255.png","f3e28ff348a293943a557ccfbdfe07a0"],["/2021/08/11/computer consistency/index.html","29ceef76f2089e6400975291fb11c837"],["/2021/08/23/test/image-20210811155339260.png","7123123dafd5a684a367fe9264552450"],["/2021/08/23/test/index.html","71055494439635041c3c98eca96ff18b"],["/2021/09/02/blog/image-20210904121552630.png","b800b7902350ab558dc27ca2b54a3ffc"],["/2021/09/02/blog/image-20210904121657061.png","ae2448741d09f800a4785e29f0f01613"],["/2021/09/02/blog/image-20210904122047953.png","e62971df37a1576f23141a11e62b5827"],["/2021/09/02/blog/image-20210904124736597.png","03f399e510c07807cac394fa7c18e1bf"],["/2021/09/02/blog/image-20210904130959727.png","4af2d653cc3b1241970fcf28e286266f"],["/2021/09/02/blog/index.html","7bee511df2274fb210b5974ed1646ee4"],["/2021/09/02/database/image-20210830125324058.png","e0679a7dbcd82365bde87f6ac71d0455"],["/2021/09/02/database/image-20210830125511047.png","7694d50ee53da058c0d0fd7ef12c3597"],["/2021/09/02/database/image-20210830125646645.png","c78b517b3eea89b516d221c303eecbfe"],["/2021/09/02/database/image-20210830125659642.png","ffc6d744591eeded53c0af7b696cadce"],["/2021/09/02/database/image-20210830125759968.png","2349f0268053bc2028441990960685de"],["/2021/09/02/database/image-20210830162152749.png","b2d1a1db9982c20b07cf0e8139b4566f"],["/2021/09/02/database/image-20210830164133066.png","358da86334bc0f9738d712182803cc9b"],["/2021/09/02/database/image-20210830164904367.png","f8dee406767220b1d263edaed7ea2aba"],["/2021/09/02/database/image-20210830165519335.png","47714beffaa6cdc84c42d67d8f732858"],["/2021/09/02/database/image-20210830175453768.png","8b6761171787191e1b8a074ee275b4bc"],["/2021/09/02/database/image-20210830175614765.png","ec0c3a77330a9021a87349de170af152"],["/2021/09/02/database/image-20210830175827529.png","3a776d35febbc9e27b725952fea0c062"],["/2021/09/02/database/image-20210830180010047.png","8f659d10c0e1ec8d61de538b521aa1a3"],["/2021/09/02/database/image-20210830180222382.png","826a7badcf10185494765b68b2f1a1ef"],["/2021/09/02/database/index.html","d972603d78324a460e40975765f53a9b"],["/2021/09/04/os/image-20210813132505956.png","02995739e478a589a6a0e2cc6afd3be9"],["/2021/09/04/os/image-20210813140742705.png","04136c9c9582d1ae4e2973255ce6da90"],["/2021/09/04/os/image-20210813141014601.png","9dca258046156d8bbe1bdec3755d3a85"],["/2021/09/04/os/image-20210817153244643.png","5cf098e3dd79f91fcf59d1b3da5bf926"],["/2021/09/04/os/image-20210817153505139.png","1092820b53aea18ca05fc9e35fad3298"],["/2021/09/04/os/image-20210817153757724.png","6ecca559d516484e52e2d6bb5e5f59ce"],["/2021/09/04/os/image-20210817154306671.png","57e5a129ab11985bcf30a01fc0c737e4"],["/2021/09/04/os/image-20210817154445255.png","f3e28ff348a293943a557ccfbdfe07a0"],["/2021/09/04/os/image-20210825114618914.png","1c36c39ee352cb680e264d9c5272bb88"],["/2021/09/04/os/image-20210825115627372.png","00f90ccda6d38d6aec4ac17bd5d427a4"],["/2021/09/04/os/image-20210904094814100.png","08024149b6c5e9c2dc0f2925829ff438"],["/2021/09/04/os/index.html","06930a36912a00254fea522ac1f9f116"],["/2021/09/04/vercel/image-20210904161835225.png","e7f119d76dbcb5adb4117bc71edc0153"],["/2021/09/04/vercel/index.html","1fe4704fd0233c369bba5554d32ffe1b"],["/about/index.html","d457d325bdfdefca43097c16fe0bada2"],["/archives/2021/07/index.html","df94b6178e03db7741a5e7a9e5ef5d01"],["/archives/2021/08/index.html","e12fbbf42c14bbb1da07a5dd765c9348"],["/archives/2021/09/index.html","87882dae308ead941764794b075ebcf2"],["/archives/2021/index.html","19de14f380075bcf95369b493b18e643"],["/archives/index.html","de793e133bc5c4af9b3d2609ac17c817"],["/categories/index.html","fe6971017d8275c8ed860716784c5987"],["/categories/博客/index.html","d668807b5af91bf8460e0272be68c828"],["/categories/博客搭建/index.html","3c80b31314e145a24900fc74b3116802"],["/categories/操作系统/index.html","aa7c5a700f7fe8e10a472fc255c84bd6"],["/categories/数据库/index.html","b481f2f678313a5586ee1480ac9ac077"],["/categories/计算机组成原理/index.html","6f8c07352d1d5f7bf50a32d169355985"],["/css/disqus-proxy.css","87976db321c1c288aa3d9d4af06c8ad8"],["/css/disqus-proxy.min.css","caa38dd245e9da4c20580c256e540bd6"],["/css/duoshuo.css","bdd8f7eb0dd14fc7e719cab11e685a9e"],["/css/duoshuo.min.css","6457d80daef45eca1f7399b2329b1dc2"],["/css/fontawesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/gallery.min.css","a62dc56ec5981c978cddcba32f2dc875"],["/css/ie-blocker.css","4c323bd282014d64264bad241f1c14d3"],["/css/material-icons.css","a6a841fd177f69bd07dbe919a744439b"],["/css/material.css","f65ff1c879db0e257bd7d9521f0eaa57"],["/css/material.min.css","67b6bbd91d44e12c7304a47f58672d38"],["/css/prettify.css","074dc30ad95ce2f227848a2c38bc7fbd"],["/css/prettify.min.css","ce9f124ce53dbfcf5758512737ee9899"],["/css/prettify/atelier-cave-dark.min.css","78d9bbfc7d0f526727e9da749cd08a44"],["/css/prettify/atelier-cave-light.min.css","e4c2bf4caff36e974733bae61be7a10b"],["/css/prettify/atelier-dune-dark.min.css","4aafbf8ec70b42c2b7964aa2b347bf68"],["/css/prettify/atelier-dune-light.min.css","65f9c4494342967919044e847347634c"],["/css/prettify/atelier-estuary-dark.min.css","79f259a7e1a0ab58772d339f97c53bf7"],["/css/prettify/atelier-estuary-light.min.css","65039bc195c71fa32df0c35bc902587d"],["/css/prettify/atelier-forest-dark.min.css","cbc537385cc8ab19748f9d4160a1e46c"],["/css/prettify/atelier-forest-light.min.css","1dda1f8f21aeedbe0fb68caf55c615e0"],["/css/prettify/atelier-heath-dark.min.css","b52d843659b13491b555f324bebfe9e8"],["/css/prettify/atelier-heath-light.min.css","0d999c502c821f1b761ad772d7301067"],["/css/prettify/atelier-lakeside-dark.min.css","f48fd98ed8f7ed8aa59fb57c87247b23"],["/css/prettify/atelier-lakeside-light.min.css","bc790feb4057204347c45ea551d0d784"],["/css/prettify/atelier-plateau-dark.min.css","e81b69c147a9ffbd298dccdaf02a810f"],["/css/prettify/atelier-plateau-light.min.css","ad2d0ed869dc8142306110f8b7fa9035"],["/css/prettify/atelier-savanna-dark.min.css","b3a404d78c50fbe9968d0d4dac123484"],["/css/prettify/atelier-savanna-light.min.css","7d4087bd0552352c12ee3dd8f397db75"],["/css/prettify/atelier-seaside-dark.min.css","10a0183644bd5c369616f0b94298c8f5"],["/css/prettify/atelier-seaside-light.min.css","6fbd6de95fcd79393de5fbb4e7a3dac7"],["/css/prettify/atelier-sulphurpool-dark.min.css","be693407f25090368983c17ad1fe1dca"],["/css/prettify/atelier-sulphurpool-light.min.css","fcd7ecab5bfa792ac082257e73f08abd"],["/css/prettify/github-v2.min.css","01fccac6dfbe2befe58590654a39f1c2"],["/css/prettify/github.min.css","dab580bb047648b053d1546fe31e1215"],["/css/prettify/hemisu-dark.min.css","7095b0461d4cf22e7935f0e447807c6d"],["/css/prettify/hemisu-light.min.css","54e6d654c095a946b257a243ffd5f3f7"],["/css/prettify/tomorrow-night-blue.min.css","2733cdcd81e2ca4e8d6598b2237c2eef"],["/css/prettify/tomorrow-night-bright.min.css","f15804e96aa1b47d36233c5b02732f28"],["/css/prettify/tomorrow-night-eighties.min.css","d8b250cd444ef8aafcaff7e5fd3f2830"],["/css/prettify/tomorrow-night.min.css","4259c6664fdae3e77c5dbc2d5c10cf88"],["/css/prettify/tomorrow.min.css","1c8792425eb2dedea306ec47bcb3c648"],["/css/prettify/tranquil-heart.min.css","ba5de9f48f4cb1b3b12b42fe047cc30e"],["/css/prettify/vibrant-ink.min.css","7b913faaa19c1af792ed54c7e0cf3deb"],["/css/style.css","d076c234da67bef747946e096fcd155b"],["/css/style.min.css","34a865290917c3f73ae93479a78c0efb"],["/css/uc.css","31dc264064481a02fb48046046a76084"],["/fonts/MaterialIcons-Regular.eot","e79bfd88537def476913f3ed52f4f4b3"],["/fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["/fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["/fonts/MaterialIcons-Regular.woff2","570eb83859dc23dd0eec423a49e147fe"],["/fonts/Roboto-Black.ttf","4dae2e3c6207a71de6b078b879230062"],["/fonts/Roboto-Bold.ttf","a68db3b33213fa138e6f72a5b76ac632"],["/fonts/Roboto-Light.ttf","8d252992868e895b059335848dec3402"],["/fonts/Roboto-Medium.ttf","989d2dff37a09f19c6dbc6f0e8f9b4ea"],["/fonts/Roboto-Regular.ttf","8f793587dcf03f31c551c5b60d175fc2"],["/fonts/Roboto-Thin.ttf","21c61396b4bea54e7308a7cda49edbe0"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/img/Bilibili.svg","196adee51408df775d7eee6871ff31d3"],["/img/GitHub.svg","fb13fdf97e7ab23fee4c2b90c33499cd"],["/img/aliyun.svg","68e880fade00ddea53c8b2a069f45f9a"],["/img/avatar.png","e59a7ba58d014ed29e32b09b3e90b99f"],["/img/baiduyun.svg","894273e054f3f3596d22be47c615085a"],["/img/bg.jpg","9d123ecaa06bd54e51e53a699b8f78e4"],["/img/bg.png","4491b5e3d2320fb530a6ecf4a3d27e9b"],["/img/browserstack_logo.png","9901607d552cbf936a8c86e6f206aa47"],["/img/daily_pic.jpg","0866aa4829fbf7b99d4547aa774c8e2e"],["/img/daily_pic.png","8655723de1bfb93de6290938f18cb8a0"],["/img/favicon.png","ee0792b614bf6612536fdc16cf7f0497"],["/img/footer/footer_ico-bilibili.svg","d67fcd7d1fa5999e9a785b2dfaa39f2c"],["/img/footer/footer_ico-facebook.svg","64c580c2986d6f16d04b1c4d3b896fd2"],["/img/footer/footer_ico-github.svg","4b3dc07ff72cee5be0eff6a100a354cd"],["/img/footer/footer_ico-gplus.svg","7d75444af4019d5612e2005ab501eca5"],["/img/footer/footer_ico-instagram.svg","c8eaf1f2fe5f4d9a7b26f2981d6f14ed"],["/img/footer/footer_ico-linkedin.svg","5e4c53b53c9d59880c6e483d57309a6a"],["/img/footer/footer_ico-segmentfault.svg","0eccec137a5113b237601b9175ec7d66"],["/img/footer/footer_ico-telegram.svg","50e65465cc40292f7101255daed7c593"],["/img/footer/footer_ico-tumblr.svg","b127eb5d3e455ba8794ddc4d060df5bc"],["/img/footer/footer_ico-twitter.svg","90ff42c9e275a7cd7ca5bf4291c93961"],["/img/footer/footer_ico-v2ex.svg","25bc6356fabbb7eb359ccc72158ebbea"],["/img/footer/footer_ico-weibo.svg","f1f6375680122267b9ebfc3b546307e8"],["/img/footer/footer_ico-zhihu.svg","39538ba6607a9dcadf6d4dca35b687b8"],["/img/gallery/arrow.svg","f3f776676f3b78b5180c9d2e08c2d532"],["/img/gallery/close.svg","181336ad0bd48cdde68d7fb8be304daf"],["/img/gallery/spinner.svg","2a61c8efd2d72146d79a2f6692840a85"],["/img/logo.png","36ec7bbf1938d8ea1f025e981fd6f67c"],["/img/newcoder.png","42283d5c9d6d997c8d5960745cdc3ebd"],["/img/random/material (1).jpg","1daaf3fc9b33aa78a9bfb0d7cea24859"],["/img/random/material (10).jpg","9a870820ccab67b552652e547af6447d"],["/img/random/material (11).jpg","c6b088a487d5ad556ed8389330dfe884"],["/img/random/material (12).jpg","fa3c11080aa7bfc67c24e7edd88b3213"],["/img/random/material (13).jpg","3d811924bdb55094d3cefcc8c69669a1"],["/img/random/material (14).jpg","6a9781c0b99b9386601f74437950c79b"],["/img/random/material (15).jpg","ca13c544ef1c2c081d4a3efa5dbf193b"],["/img/random/material (16).jpg","d4577fda07e68500cdb749a9660e3d04"],["/img/random/material (17).jpg","2308fdae5e809ed83c375bc5afeecb42"],["/img/random/material (18).jpg","8fda8cf7ad5bd320ef924b8264c9a0a1"],["/img/random/material (19).jpg","940d1b64fdd05a3dede0606f27e1bda9"],["/img/random/material (2).jpg","4a86524726d79b8355ab6bd5f30155d3"],["/img/random/material (20).jpg","5a63b048d5072fcbdadf6bb168dde1b2"],["/img/random/material (21).jpg","b015d06fff246c63b869176d1fc99b5a"],["/img/random/material (22).jpg","39618111a770abc5a84898167bd942ff"],["/img/random/material (23).jpg","b408c2b4d7e202d17b69d6bf2c8a04a2"],["/img/random/material (24).jpg","d980c2bf15970214e9c369d39cc832bd"],["/img/random/material (25).jpg","c6de69c4c1f8f2f6e9b7ee2418ea925f"],["/img/random/material (26).jpg","d5dbddc503aef16ffaff6233a1847d79"],["/img/random/material (27).jpg","02f92967bcc1f34f7b57bad8e7c32977"],["/img/random/material (28).jpg","be1bb3f69243a98fd5400d69e24274cd"],["/img/random/material (29).jpg","71993d2d899d730f78129f5833f65956"],["/img/random/material (3).jpg","098950451a6926b20f52cb577d097b61"],["/img/random/material (30).jpg","64fb325a94378102603f2757de51899c"],["/img/random/material (31).jpg","247aa30ea70f7385f6a72a94c591e25c"],["/img/random/material (32).jpg","b8a0648d5ce5ffa3a3345f6ba7c149f6"],["/img/random/material (33).jpg","c5f8486f660622e0197a923b7a4684d4"],["/img/random/material (34).jpg","2c042720cc2fe507b7bf385e5627faee"],["/img/random/material (35).jpg","7011c4e0d9a9e5a33f09b71a928145c8"],["/img/random/material (36).jpg","1c3a35613a88c5a13410d99016c85450"],["/img/random/material (37).jpg","7105adfcc05e0c1d6b77a10fe8acde51"],["/img/random/material (38).jpg","1be2328ca3141ad165a7168bb4b94be2"],["/img/random/material (39).jpg","bc823629358bc26edbba7002274eff9c"],["/img/random/material (4).jpg","3d2ebbf3f88ec63e18c6deddca22a394"],["/img/random/material (40).jpg","fe668983b0ad74a7c62db31921a769d7"],["/img/random/material (41).jpg","a1aef00e7d462a6ebc585dddbb6e346f"],["/img/random/material (42).jpg","24539caf1796b772f4c66f4c0114e032"],["/img/random/material (43).jpg","38756ed09a5c8e1776e74f395c333ef4"],["/img/random/material (44).jpg","f73ab335254ca54ad63b64d7d8d4a85b"],["/img/random/material (45).jpg","babb24eea7ed53c160c2abf01a76632b"],["/img/random/material (46).jpg","e0fb1faa51568618c0f45bdd0076407b"],["/img/random/material (47).jpg","d17ffef498ca0b1d034a6b2c1ec61c5c"],["/img/random/material (48).jpg","37a1175882adeeaa6ecbdd363299e62b"],["/img/random/material (49).jpg","dfa01b2b5458887ad4c90e3621cbf806"],["/img/random/material (5).jpg","ba96901714d583d171fd79f718e7b703"],["/img/random/material (50).jpg","9f2f0b32f273fad0997a62eea36424b1"],["/img/random/material (51).jpg","413ee9dbb94a77b5671fbfa4d97c0132"],["/img/random/material (52).jpg","67ca7ae8b31429c97f6b8001510a1e89"],["/img/random/material (53).jpg","f77871d8a070c24a126f426a098061e7"],["/img/random/material (54).jpg","7777dac7a2cc593a4367bc87f60563ad"],["/img/random/material (55).jpg","31ec781e66c3feabc0c52eaf32b152a2"],["/img/random/material (56).jpg","a1cfbe7e5e8bef572780f9515df04506"],["/img/random/material (57).jpg","0d76e24513f1fae95b5f86c84a74e967"],["/img/random/material (58).jpg","7a31a453004de813d098444b7ef037ab"],["/img/random/material (59).jpg","98f3d95c51ae092afaeb76aaced722bd"],["/img/random/material (6).jpg","5ab8f824702f8f670a5f443b4e3790fd"],["/img/random/material (60).jpg","d086e0a67587428065b4f5ff5ace3db8"],["/img/random/material (61).jpg","3365b6c7829dbcf98d5f4f766f70fd0d"],["/img/random/material (62).jpg","7b5ac511404294a3486d450adc1f2649"],["/img/random/material (63).jpg","0a01567c02e936f816a96b2808884b0e"],["/img/random/material (64).jpg","1c457c2f6aa814471106a68cfb90b3a2"],["/img/random/material (65).jpg","450b666140fa4de34b287259c92e5a63"],["/img/random/material (66).jpg","65d4d8ed41fadfedb297c8b5e441bb8e"],["/img/random/material (67).jpg","331be0fec352854c3fc1bdbc37c990d5"],["/img/random/material (68).jpg","2a371c1d4aa604ef4dfae55e036d2416"],["/img/random/material (69).jpg","3923b885462076566dca807b0dee7cf0"],["/img/random/material (7).jpg","ca91392b5e01543564cd4e237799d9bf"],["/img/random/material (70).jpg","3a96ae0dccc90606bd9922188cdf78f8"],["/img/random/material (71).jpg","1e7583d7c922d2a25e38d15309d6012a"],["/img/random/material (72).jpg","f3cd605cd965ec8cbbb7ba4127b60695"],["/img/random/material (73).jpg","362894e53855a84ce217f1543a62d21e"],["/img/random/material (74).jpg","d35e4bebfec72e6a93802eeffdc4b58d"],["/img/random/material (75).jpg","038dcbff10fb705abd311c74c788d586"],["/img/random/material (76).jpg","dbd005554666c34ae5b99e27557008bb"],["/img/random/material (77).jpg","4e427162b4f7b4c523a27e03f8df4a97"],["/img/random/material (78).jpg","bbc90a575bac78e410e61acee13d4012"],["/img/random/material (79).jpg","8f9e1d5a0fc344f8288b046efec3cd20"],["/img/random/material (8).jpg","8c64e051a348af41ab39ba7bc2ea2575"],["/img/random/material (80).jpg","1d49aac6b455f7d013d064f3aa56ad7c"],["/img/random/material (81).jpg","6698d706f5fc9e952e5985aefb1aad2c"],["/img/random/material (82).jpg","035b9279173813abda822a79dbb78b55"],["/img/random/material (83).jpg","38f2c9b4b060f115cc00a20a8642470a"],["/img/random/material (9).jpg","a74d0746780c7dd056fa117fd4563853"],["/img/sidebar-1.jpg","7f83a60604a75f14971d0a42cefbb027"],["/img/sidebar-2.jpg","99de80715f123e828bdb1b42c6908c3a"],["/img/sidebar-3.jpg","5d518309e25d2b8b8a3f74520b45ec1f"],["/img/sidebar-4.jpg","e213e22d2c32bee00ba46dd27a7661e5"],["/img/sidebar_header.png","0ac2232bb0756d0d4e5f04875b443217"],["/img/snh48.svg","effc8bd6b9da693f9ed03e160220e7bc"],["/img/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/index.html","07e75a81fc64be8729884af7164d91df"],["/js/MathJax.js","1bef8ba3b323e77cd264bfc09662ae1e"],["/js/Valine.min.js","c640924dc2c3508b1a1c8f3ab726f3fa"],["/js/gallery/gallery.js","54dbd709efe8893194901af3fce1379d"],["/js/hanabi-browser-bundle.js","3e48b9fa9ce496eaaee7783ea2e316a4"],["/js/ie-blocker.en.js","eb054767893aa2f8e981be25c4221415"],["/js/ie-blocker.zhCN.js","861699947bcd571f62d6dc10f1c43be0"],["/js/jquery.min.js","a9cbac0142cd78192ca9f7ea50cdbe22"],["/js/js.js","d69f3cf073c561b1820bbdd62b60bb06"],["/js/js.min.js","067f54cc49bc46b052c6ac99074ccf8c"],["/js/lazyload.min.js","d4171fcee357a95fa7b45ea0abee57dd"],["/js/lsloader.js","d01962f06751b296c985a8fee73019f8"],["/js/lsloader.min.js","fdef13cf99a299ae566d65ab828cdc19"],["/js/nprogress.js","a65dd085bf65bea475165c8b5276b563"],["/js/prettify.min.js","58dd3b7e2bc741230a5b2ec1987041eb"],["/js/queue.js","3ef240fa4fc55888e5e234e48f23fc95"],["/js/queue.min.js","1677e3c59497558a9f53b73b726dedc6"],["/js/smoothscroll.js","94ecbf0028f9b2e48d8bb6551556e915"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/resources/index.html","827233aa61c6a933fba50d2f769e6d32"],["/sw-register.js","4cfdcfd9c78a763d036e8a4a06538d93"],["/tags/Material/index.html","e94d5c5e67304191a984d2a4ed8c5988"],["/tags/index.html","83efaa6ee97f35de8642f8254e3acf08"],["/tags/vercel/index.html","9154d83a3397acdddfc6eb3d751d3ab1"],["/tags/专业课/index.html","8632b43479e425be16e0679d1369adc4"],["/tags/代码托管/index.html","306625736b35ab57b382f49d424e2dd5"],["/tags/搭建测试/index.html","38181ad1c538231e82d81df75d5ebd42"],["/tags/操作系统/index.html","f737d6a797e6fe53ec0b55559d4ef931"],["/tags/数据库/index.html","1ee9fbf6b8672bddfb41f783f3540228"],["/tags/暑期系列/index.html","815c3d99a4a684c426c760e98fca8841"],["/tags/计组/index.html","ccb12684fa1d41f4870b84c93cbfa6f1"],["/timeline/index.html","77026191bec2fe9a466740edb7c8e49a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
