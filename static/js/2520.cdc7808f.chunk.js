"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2520],{84676:function(e,r,n){n.r(r),n.d(r,{default:function(){return T}});var s=n(93433),t=n(1413),a=n(29439),g=n(98985),i=n(83138),w=n(92883),l=n(3884),c=n(95744),o=n(6833),d=n(49815),h=n(80607),z=n(73276),p=n(38757),m=n(58600),u=n(4896),j=n(82530),x=n(67917),f=n(72249),v=n(92311),k=n(39155),b=n(71233),N=n(34578),y=(n(32250),"hwks9j7 rgw6ezd7 rgw6ez4ej rgw6ezb7 rgw6ezpv rgw6ezvd rgw6ezvp rgw6ezg1 rgw6ezfq"),_="hwks9jm rgw6ezav rgw6ez4ep rgw6ezvv rgw6ezf7",S="hwks9jy rgw6ez4ep rgw6ezap rgw6ezl7",C=n(37881),E=g.default.a.withConfig({componentId:"sc-cb512n-0"})(["position:absolute;right:32px;top:32px;color:",";cursor:pointer;"," @media only screen and (max-width:","){right:12px;top:28px;}"],(function(e){return e.theme.textSecondary}),d.c,(function(e){var r=e.theme;return"".concat(r.breakpoint.sm,"px")})),T=function(){var e=(0,b.useState)(3e3),r=(0,a.Z)(e,2),n=r[0],g=r[1],d=(0,b.useState)(!1),T=(0,a.Z)(d,2),R=T[0],U=T[1],I=(0,x.pQ)((function(e){return e.txHash})),F=(0,x.pQ)((function(e){return e.purchasedWithErc20})),q=(0,x.pQ)((function(e){return e.setState})),P=(0,x.pQ)((function(e){return e.state})),A=(0,b.useRef)(P),B=(0,x.JC)((function(e){return e.transactionResponse})),D=(0,x.JC)((function(e){return e.setTransactionResponse})),Z=(0,x.dD)(),H=(0,N.E)(1,I,N.r.TRANSACTION),W=(P===f.c$.Success||P===f.c$.Failed)&&P,M=(0,l.oO)({modal:c.KO.NFT_TX_COMPLETE}),L=(0,b.useMemo)((function(){return(0,v.lb)(B,n)}),[B,n]),Y=L.nftsPurchased,Q=L.nftsNotPurchased,$=L.showPurchasedModal,G=L.showRefundModal,V=L.totalPurchaseValue,O=L.totalRefundValue,J=L.totalUSDRefund,X=L.txFeeFiat;function K(){D({}),q(f.c$.New)}(0,b.useEffect)((function(){(0,v.tw)().then((function(e){g(null!==e&&void 0!==e?e:0)}))}),[]),(0,b.useEffect)((function(){x.pQ.subscribe((function(e){return A.current=e.state}))}),[]);return(0,C.jsx)(C.Fragment,{children:W&&(0,C.jsxs)(z.h,{children:[(0,C.jsx)(u.a,{onClick:K}),(0,C.jsxs)(h.n,{className:"hwks9j1 rgw6ez2dv rgw6ez2jd rgw6ez2rj rgw6ez2b1 rgw6ez44v rgw6ez48v rgw6ez1dv rgw6ez16v rgw6ez172 rgw6ez347 rgw6ez398 rgw6ez3f7 rgw6ez3rp rgw6ez7mb",onClick:K,children:[$&&(0,C.jsx)(l.fM,{name:c.Yz.NFT_BUY_BAG_SUCCEEDED,properties:(0,t.Z)((0,t.Z)({buy_quantity:Y.length,usd_value:parseFloat((0,i.formatEther)(V))*n,transaction_hash:I,using_erc20:F},(0,k.H)(Y)),M),shouldLogImpression:!0,children:(0,C.jsxs)(h.n,{className:"hwks9j3 rgw6ez4pd rgw6ez7bv rgw6ez44v rgw6ez447 rgw6ez1e1 rgw6ez491 rgw6ez16v rgw6ez172 rgw6ez2pv rgw6ez2pw rgw6ez29d rgw6ez29e",onClick:u.U,children:[(0,C.jsx)(m.jS,{color:j.gR.color.pink400,width:"36",height:"36",className:"rgw6ez48p rgw6ez35d rgw6ez36k rgw6ez3gp rgw6ez3h2"}),(0,C.jsxs)(h.n,{display:"flex",flexWrap:"wrap",width:"full",height:"min",children:[(0,C.jsx)("h1",{className:y,children:(0,C.jsx)(w.Z,{children:"Complete!"})}),(0,C.jsx)("p",{className:"hwks9jd rgw6ez4ej rgw6ezav rgw6ez16v rgw6ez46d rgw6ezpv rgw6ezvd rgw6ezvp rgw6ezh1",children:(0,C.jsx)(w.Z,{children:"Uniswap has granted your wish!"})})]}),(0,C.jsx)(E,{onClick:function(){window.open((0,v.fj)(Y,H),"newwindow","left=".concat((window.screen.width-560)/2,", top=").concat((window.screen.height-480)/2,", width=").concat(560,", height=").concat(480))},target:"_blank",children:(0,C.jsx)(m.Zm,{width:32,height:32,color:j.Z4.colors.textSecondary})}),(0,C.jsx)(h.n,{className:"hwks9jf rgw6ez44v rgw6ez447 rgw6ez16v rgw6ez7mb rgw6ez47p",style:{maxHeight:Y.length>32?Z?"172px":"292px":"min-content"},children:(0,s.Z)(Y).map((function(e,r){return(0,C.jsx)("img",{className:(0,o.default)("hwks9jh rgw6ez7bj rgw6ez3xv",Y.length>1&&"rgw6ezqp rgw6ezr2 rgw6ezfp rgw6ezg2"),style:{maxHeight:"".concat((0,v.QP)(Y.length,Z),"px"),maxWidth:"".concat((0,v.QP)(Y.length,Z),"px")},src:e.imageUrl,alt:e.name},r)}))}),Y.length>32&&(0,C.jsx)(h.n,{className:"hwks9jk"}),(0,C.jsxs)(h.n,{display:"flex",width:"full",height:"min",flexDirection:"row",marginTop:{sm:"20",md:"20"},flexWrap:{sm:"wrap",md:"nowrap"},alignItems:"center",paddingRight:"40",paddingLeft:"40",className:"rgw6ez4ej rgw6ezav",justifyContent:"space-between",children:[(0,C.jsxs)(p.X2,{children:[(0,C.jsxs)(h.n,{marginRight:"16",children:[Y.length," NFT",1===Y.length?"":"s"]}),(0,C.jsxs)(h.n,{children:[(0,v.IA)(V.toString())," ETH"]})]}),(0,C.jsx)("a",{href:H,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,C.jsx)(h.n,{color:"textSecondary",fontWeight:"normal",children:(0,C.jsx)(w.Z,{children:"View on Etherscan"})})})]})]})}),G&&($?(0,C.jsx)(l.fM,{name:c.Yz.NFT_BUY_BAG_REFUNDED,properties:(0,t.Z)({buy_quantity:Y.length,fail_quantity:Q.length,refund_amount_usd:J,transaction_hash:I},M),shouldLogImpression:!0,children:(0,C.jsxs)(h.n,{className:"hwks9js rgw6ez4pd rgw6ez7bv rgw6ez44v rgw6ez447 rgw6ez2pp rgw6ez2q2 rgw6ez2jp rgw6ez2k8 rgw6ez2ep rgw6ez2f2 rgw6ez1e1 rgw6ez16v rgw6ez172 rgw6ez491 rgw6ezwj",onClick:u.U,children:[(0,C.jsxs)(h.n,{display:"inline-flex",flexWrap:"wrap",width:{sm:"full",md:"half"},paddingRight:{sm:"0",md:"32"},children:[(0,C.jsx)(m.YG,{color:"pink"}),(0,C.jsx)("p",{className:"hwks9ju rgw6ez4ej rgw6ezd7 rgw6ezb1 rgw6ezl7 rgw6ezvd rgw6ezf7 rgw6ezke",children:"Instant Refund"}),(0,C.jsxs)("p",{className:"hwks9jw rgw6ez4ej rgw6ezav rgw6ezpv rgw6ezvd rgw6ezwp rgw6ezgp rgw6ez16v",children:["Uniswap returned"," ",(0,C.jsxs)("span",{style:{fontWeight:"700"},children:[(0,v.IA)(O.toString())," ETH"]})," ","back to your wallet for unavailable items."]}),(0,C.jsxs)(h.n,{display:"flex",flexWrap:"wrap",bottom:"24",width:"full",alignSelf:"flex-end",position:{sm:"absolute",md:"static"},children:[(0,C.jsxs)("p",{className:_,style:{marginBottom:"2px"},children:[(0,v.IA)(O.toString())," ETH"]}),(0,C.jsx)("p",{className:S,children:(0,v.pM)(J)}),(0,C.jsxs)("p",{className:_,style:{width:"100%"},children:["for ",Q.length," unavailable item",1===Q.length?"":"s","."]}),(0,C.jsx)(h.n,{position:{sm:"absolute",md:"relative"},right:{sm:"0",md:"auto"},bottom:{sm:"0",md:"auto"},justifyContent:{sm:"flex-end",md:"flex-start"},textAlign:{sm:"right",md:"left"},flexShrink:"0",marginRight:{sm:"40",md:"24"},width:{sm:"half",md:"auto"},children:(0,C.jsx)("a",{href:H,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,C.jsx)(h.n,{fontWeight:"normal",marginTop:"16",color:"textSecondary",className:_,children:"View on Etherscan"})})})]})]}),(0,C.jsx)(h.n,{className:"hwks9j10 rgw6ez1e1 rgw6ez1dw rgw6ez16v rgw6ez16q rgw6ez447 rgw6ez7mb rgw6ez471 rgw6ez451 rgw6ez2e8",children:Q.map((function(e,r){return(0,C.jsx)(h.n,{display:"flex",flexWrap:"wrap",height:"min",width:"52",children:(0,C.jsx)("img",{className:"hwks9j12 rgw6ez1b1 rgw6ez141 rgw6ez7bb rgw6ezqp rgw6ezfd",src:e.imageUrl,alt:e.name},r)},r)}))}),(0,C.jsx)(h.n,{className:"hwks9j14 rgw6ez16v rgw6ez16q rgw6ezpv rgw6ez3q7"})]})}):(0,C.jsx)(l.fM,{name:c.Yz.NFT_BUY_BAG_REFUNDED,properties:(0,t.Z)({buy_quantity:0,fail_quantity:Q.length,refund_amount_usd:J},M),shouldLogImpression:!0,children:(0,C.jsxs)(h.n,{className:"hwks9j16 rgw6ez4pd rgw6ez7bv rgw6ez44v rgw6ez447 rgw6ezvd rgw6ez46d rgw6ezpv rgw6ezp2 rgw6ez2vj rgw6ez1e1",onClick:u.U,children:[(0,C.jsx)(h.n,{marginLeft:"auto",marginRight:"auto",display:"flex",children:P===f.c$.Success?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(m.YG,{}),(0,C.jsx)("h1",{className:y,children:"Instant Refund"})]}):(0,C.jsx)("h1",{className:y,children:"Failed Transaction"})}),(0,C.jsxs)("p",{className:"hwks9j1c rgw6ez4ej rgw6ezav rgw6ezpv rgw6ezvd rgw6ezw7",children:[P===f.c$.Success&&"Selected item".concat(1===Y.length?" is":"s are"," no longer available. Uniswap instantly refunded you for this incomplete transaction. "),(0,v.cd)(X)," was used for gas in attempt to complete this transaction. For support, please visit our ",(0,C.jsx)("a",{href:"https://discord.gg/FCfyBSbCU5",children:"Discord"})]}),(0,C.jsxs)(h.n,{className:"hwks9j1e rgw6ez16v",children:[Q.length>=3&&(0,C.jsxs)(h.n,{className:"rgw6ez6cj rgw6ez7bb rgw6ez44v rgw6ez447 rgw6ezvv rgw6ezfd rgw6ez1b1 rgw6ez79z",onClick:function(){U(!R)},children:[!R&&(0,C.jsx)(h.n,{paddingLeft:"20",paddingTop:"8",paddingBottom:"8",children:Q.slice(0,3).map((function(e,r){return(0,C.jsx)("img",{style:{zIndex:2-r},className:"hwks9j1j rgw6ez7b7 rgw6ez1a7 rgw6ez137 rgw6ez491",src:e.imageUrl,alt:e.name},r)}))}),(0,C.jsxs)(h.n,{color:R?"textPrimary":"textSecondary",className:"hwks9j1l rgw6ez4ep rgw6ezcp rgw6ezav rgw6ez2oj rgw6ez281 rgw6ez2dv",children:["Unavailable",(0,C.jsxs)(h.n,{className:"hwks9j1n rgw6ezcp rgw6ezap rgw6ez44v",children:[Q.length," item",1===Q.length?"":"s"]})]}),(0,C.jsx)(m.g8,{className:"".concat(!R&&"hwks9j1t"," ").concat("hwks9j1s rgw6ezkd rgw6ezkp rgw6ezvd rgw6ez19d rgw6ez12d")})]}),(R||Q.length<3)&&Q.map((function(e,r){return(0,C.jsxs)(h.n,{backgroundColor:"backgroundSurface",display:"flex",padding:"4",marginBottom:"1",borderRadius:"8",children:[(0,C.jsx)(h.n,{className:"hwks9j1o",children:(0,C.jsx)("img",{className:"hwks9j1q rgw6ez7b7 rgw6ez1ev rgw6ez1v7 rgw6ez17v rgw6ez1h7 rgw6ez49j",src:e.imageUrl,alt:e.name})}),(0,C.jsxs)(h.n,{flexWrap:"wrap",marginTop:"4",children:[(0,C.jsx)(h.n,{marginLeft:"4",width:"full",display:"flex",children:(0,C.jsxs)("p",{className:_,style:{marginBottom:"2px"},children:[(0,v.IA)(e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice)," ","ETH"]})}),(0,C.jsx)(h.n,{color:"textPrimary",className:S,children:P===f.c$.Success?"Refunded":e.name})]})]},r)}))]}),R&&(0,C.jsx)(h.n,{className:"hwks9j1f"}),(0,C.jsxs)("p",{className:_,style:{marginBottom:"2px"},children:[(0,v.IA)(O.toString())," ETH"]}),(0,C.jsx)("p",{className:S,children:(0,v.pM)(J)}),(0,C.jsx)(h.n,{className:"hwks9j9 rgw6ez4ep rgw6ezaj rgw6ez44v rgw6ez3j rgw6ez1e1 rgw6ez3b7",marginLeft:"auto",marginRight:"0",children:(0,C.jsx)("a",{href:H,target:"_blank",rel:"noreferrer",children:(0,C.jsx)(h.n,{className:"hwks9jb rgw6ez4ep rgw6ezaj rgw6ezcp rgw6ezw7",children:"View on Etherscan"})})}),(0,C.jsxs)("p",{className:_,children:["for ",Q.length," unavailable item",1===Q.length?"":"s","."]}),(0,C.jsxs)(h.n,{as:"button",border:"none",backgroundColor:"accentAction",cursor:"pointer",className:"hwks9j18 rgw6ez1ad rgw6ez46d rgw6ezd7 rgw6ezav rgw6ez4c7 rgw6ez6ap rgw6ez44v rgw6ez3j rgw6ezpv rgw6ezvd rgw6ezwp",type:"button",onClick:function(){return K()},children:[(0,C.jsx)(m.pf,{className:"rgw6ez6yv rgw6ezlv rgw6ezsd"}),"Return to Marketplace"]})]})}))]})]})})}}}]);
//# sourceMappingURL=2520.cdc7808f.chunk.js.map