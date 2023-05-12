export default{
    pathname(url){
        return new URL(url).pathname
    },
    name(url){
        return this.pathname(url).split("/").pop().replace(".js","")
    },
    uri(url){
        return this.pathname(url).replace(".js", ".html")
    }
}