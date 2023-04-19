
export const beforeEach = async (to, from, next) => {
  addUrlParams(to, from, next)
}

function addUrlParams(to, from, next, path) {
  if (Object.keys(to.query).length) {
    if (path) {
      next({ path });
    } else {
      next()
    }
    return;
  };
  if (Object.keys(from.query).length) {
    let toQuery = Object.assign({}, to.query, from.query)
    if (path) {
      next({
        path,
        query: toQuery
      })
    } else {
      next({
        path: to.path,
        query: toQuery
      })
    }
  } else {
    if (path) {
      next({ path });
    } else {
      next()
    }
  }
}
