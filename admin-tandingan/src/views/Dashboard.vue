<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text text--darken-2">Dashboard</h1>
    <v-container class="my-3">
      <template>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Buyer
                </th>
                <th class="text-left">
                  Seller
                </th>
                <th class="text-left">
                  Product
                </th>
                <th class="text-left">
                  Price
                </th>
                <th class="text-left">
                  Quantity
                </th>
                <th class="text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in transactionData" :key="item.id">
                <td>{{ item.customer_email }}</td>
                <td>{{ item.seller_email }}</td>
                <td>{{ item.product_name }}</td>
                <td>{{ item.deal_price }}</td>
                <td>{{ item.deal_qty }}</td>
                <td>{{ item.payment_status }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
    </v-container>
  </div>
</template>

<script>
// import EditForm from "../components/Category.vue";

export default {
  name: "Dashboard",
  // components: { EditForm },
  data() {
    return {
      name: "",
      price: "",
      stock: "",
      image_url: [],
      images_url: [
        "image_url1",
        "image_url2",
        "image_url3",
        "image_url4",
        "image_url5"
      ],
      select: null,
      items: ["T-Shirts", "Shirts", "Pants", "Outers", "Accessories"],
      image: null,
      files: "",
      deleteDialog: false
    };
  },
  computed: {
    transactionData() {
      return this.$store.state.transactionData;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  methods: {
    submit() {
      this.$store.commit("SET_LOADING", "wait");
      this.$store
        .dispatch("addProduct", {
          name: this.name,
          price: this.price,
          stock: this.stock,
          image_url: this.image_url,
          category: this.select,
          files: this.files
        })
        .then(() => this.clear());
    },
    clear() {
      // this.$v.$reset();
      this.name = "";
      this.price = "";
      this.stock = "";
      this.image_url = [];
      this.select = null;
      this.image = null;
    },
    loadFile(event) {
      if (event && event.length == 0) {
        this.image = null;
        this.image_url = [];
        this.files = "";
      } else if (event && event.length > 0) {
        this.image_url = [];
        this.image.forEach(el => {
          this.image_url.push(URL.createObjectURL(el));
        });
        this.files = event; // array
      }
    },
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
      this.deleteDialog = false;
    }
  },
  created() {
    this.$store
      .dispatch("fetchTransactionData")
      .then(() => console.log(this.transactionData));
    this.$store.commit("SET_LOADING", "");
  }
};
</script>
