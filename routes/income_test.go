package routes_test

import (
	"net/url"
	"strings"
	"time"

	"github.com/gojek/heimdall/v7/httpclient"
	"github.com/google/uuid"
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("Income", func() {
	var (
		data url.Values
	)
    BeforeEach(func() {
		data := url.Values{}
		data.Set("ID", uuid.NewString())
		data.Set("Label", "Fullstack Academy")
		data.Set("Amount", "170")
		data.Set("Year", "2021")
		data.Set("Month", "1")
		data.Set("Week", "2")
		data.Set("UserID", "104339327579910530165")
    })

	Context("Can create a new income", func() {
		It("should be a novel", func() {
			timeout := 1000 * time.Millisecond
			client := httpclient.NewClient(httpclient.WithHTTPTimeout(timeout))
			resp, err := client.Post("/api/income", strings.NewReader(data.Encode()), nil)
			if err != nil {
				panic(err)
			}
			Expect(resp).To(Equal(true))
		})
	})

	// Context("Can read the new income", func() {
	// 	It("should be a short story", func() {
	// 		Expect(shortBook.CategoryByLength()).To(Equal("SHORT STORY"))
	// 	})
	// })

	// Context("Can delete the new income", func() {
	// 	It("should be a short story", func() {
	// 		Expect(shortBook.CategoryByLength()).To(Equal("SHORT STORY"))
	// 	})
	// })
})
