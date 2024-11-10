async function s(r){let e="Unknown error occurred";throw r.errors&&Array.isArray(r.errors)?e=r.errors.map(o=>o.message+".").join(`
`):r.error&&r.error.message&&(e=r.error.message+"."),new Error(e)}export{s as a};
