

export class FileUploaderService {

    // static getCommitHistoryOfService(serviceName: string): Promise<Commit[]> {
    //     return fetch(`/api/build-dashboard/github/services/${serviceName}/history`)
    //         .then(r => r.json().then(body => {
    //             if (!r.ok) {
    //                 alert(body.error)
    //             }
    //             return body;
    //         }));
    // }

    static async fetchData () {
        
        return fetch(`http://localhost:8000/`)
            .then(r => {
                console.log(r);
                r.json().then(body => {
                    if (!r.ok) {
                        alert(body.error)
                    }
                })
                return r.body.message
            })
            .catch(e => {
                alert(e.message)
            });
    }

    static async uploadFile (formData) {
        const qp = [
            {k: "formData", v: formData},
        ];
        const query = qp.filter(it => it.v)
            .map(it => `${it.k}=${it.v}`)
            .join("&");
        console.log("serv");
        
        console.log(formData);
        
        return fetch(`http://localhost:8000/`)
            .then(r => {
                console.log(r);
                r.json().then(body => {
                    if (!r.ok) {
                        alert(body.error)
                    }
                })
                return r.ok
            })
            .catch(e => {
                alert(e.message)
            });
    }

}
