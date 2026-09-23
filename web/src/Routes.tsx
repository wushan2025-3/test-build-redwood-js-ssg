import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" prerender />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
