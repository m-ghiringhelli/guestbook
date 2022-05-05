# PLAN

things I need:

-views/components/setup
  -browserrouter
    -(path='/login') renders login view
    -private route for posts (path='/')
      -redirect to ('/login') if !user
  -signup/signin (login)
    -form for submitting
  -display posts (entrylist view)
    -fetch posts then map
    -use email stored in context for name
  -add post
    -text entry
    -onSubmit call add post function
-services
  -supabase client
  -fetch posts
  -add post
    -text entry box
  -auth
    -userContext for user info (store email)
      -custom hook to expose context state for reading/writing
      -children prop to render children from provider
      -use context in two components (header and entry list?)
-tests
  -behavior testing for EntryList view
    -will need msw to mock supabase data
-deploy to netlify