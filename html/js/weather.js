// 使用本文件的有：index.html
//天气 
function reinitIframe() {         
var iframe = document.getElementById("urlIframe");                
try 
{                          
                var bHeight = iframe.contentWindow.document.body.scrollHeight;                
/*       
                var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;              
                var height = Math.max(bHeight, dHeight);                          
                    iframe.height = height;                */                         
                iframe.height = bHeight;                      
} 
        catch (ex) { }                 
}
