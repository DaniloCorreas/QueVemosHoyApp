export const getResults = async(url) => {


        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODAwOGVlY2JiNTk5NzVmNzMwYzhiYmQ5ODM3NWJmZCIsInN1YiI6IjY0MmUwMjZmNTRhOGFjMGFjMjNkNjczMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCs4hgDnL8I6P14jnr1I1XPSlrYhgzyb5ApXH1xsZig'
            }
        };
        
        const resp = await fetch(url, options)
        const response = await resp.json()
            return response
            

    }
