package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	database "github.com/gjagnoor/budget/db"
	"gorm.io/gorm"
)

func UserRoutes (api *gin.RouterGroup, db *gorm.DB) {

	// r.POST("/users/{id}", func(w http.ResponseWriter, r *http.Request) { // change this later. ID Should not be sent in the url
	// 	userID := chi.URLParam(r, "id")
	// 	uuid, err := uuid.Parse(userID)
	// 	fmt.Println(uuid)
	// 	if err != nil {
	// 		http.Error(w, err.Error(), http.StatusBadRequest)
	// 	}
	// 	postgres.DeleteUser(uuid, db)
	// 	http.Redirect(w, r, "/", http.StatusFound)	
	// })

	api.GET("/users", func(c *gin.Context) {
		users := database.GetUsers(db)
		c.JSON(http.StatusOK, users)
	})

	// r.Get("/user", func(res http.ResponseWriter, req *http.Request) {
	// 	type data struct {
	// 		User postgres.User
	// 	}
	// 	templ := template.Must(template.New("").Parse(templates.UserListHTML))

	// 	decoder := json.NewDecoder(req.Body)
	// 	var userID uuid.UUID
	// 	err := decoder.Decode(&userID)
	// 	if err != nil {
	// 		panic(err)
	// 	}

	// 	user, err := postgres.GetUser(userID, db)
	// 	if err != nil {
	// 		log.Fatal(err)
	// 	}
	// 	templ.Execute(res, data{User: user})	
	// })

	// r.Get("/user/new", func(w http.ResponseWriter, r *http.Request) {
	// 	templ := template.Must(template.New("").Parse(templates.UserSignUpHTML))
	// 	templ.Execute(w, nil)
	// })

	// r.Post("/user/new", func(w http.ResponseWriter, r *http.Request) {
	// 	email := r.FormValue("email")
	// 	password := r.FormValue("password")
	// 	uuid := uuid.New()
	// 	joined := time.Now().UnixNano() / int64(time.Millisecond)
	// 	user := postgres.User { 
	// 		ID: uuid, 
	// 		Email: email, 
	// 		Password: password, 
	// 		Joined: joined,
	// 	}
	// 	postgres.CreateUser(user, db)
	// 	http.Redirect(w, r, "/", http.StatusFound)	
	// })

	// r.Put("/user", func(w http.ResponseWriter, r *http.Request) {
	// 	decoder := json.NewDecoder(r.Body)
	// 	var user postgres.User
	// 	err := decoder.Decode(&user)
	// 	if err != nil {
	// 		panic(err)
	// 	}
	// 	postgres.UpdateUser(user, db)
	// 	http.Redirect(w, r, "/", http.StatusFound)		
	// })
}
