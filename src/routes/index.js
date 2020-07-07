const router = (app) =>{
    app.route('/contact')
        .get((req,res)=>{
            res.send('Get req')})
        .post((req,res)=>{
            res.send('Post is ok');
            });


    app.route('/contact/:id')
        .put((req,res)=>{
            res.send('PUT IS OK')
        })
        .delete((req,res)=>{
            res.send('DEL IS OK')
        });

}
export default router