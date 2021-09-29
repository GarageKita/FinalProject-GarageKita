<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <a v-on="on" @click="editProduct" class="black--text text-decoration-none"
        >Edit</a
      >
    </template>
    <v-card>
      <v-card-title class="grey--text text--darken-2">
        <h3>Edit Product</h3>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Name" v-model="name"></v-text-field>
          <v-text-field
            type="number"
            prefix="Rp"
            label="Price"
            v-model="price"
          ></v-text-field>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                type="number"
                suffix="pcs"
                label="Stock"
                v-model="stock"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-select
                v-model="select"
                :items="items"
                label="Category"
                required
              ></v-select>
            </v-col>
          </v-row>
          <v-text-field
            class="d-none"
            label="URL"
            v-model="image_url"
          ></v-text-field>
          <v-btn
            dark
            color="grey darken-4"
            class="mr-4"
            @click="submit(product.id)"
          >
            edit
          </v-btn>
          <v-btn dark color="grey darken-4" @click="clear">
            clear
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Category",
  props: ["product"],
  data() {
    return {
      name: "",
      price: "",
      stock: "",
      category: "",
      image_url: "",
      image: null,
      select: null,
      items: ["T-Shirts", "Shirts", "Pants", "Outers", "Accessories"],
      dialog: false
    };
  },
  methods: {
    editProduct() {
      this.name = this.product.name;
      this.price = this.product.price;
      this.stock = this.product.stock;
      this.select = this.product.category;
      this.image_url = this.product.image_url;
    },
    submit(id) {
      this.$store.dispatch("editProduct", {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url,
        category: this.select,
        id
      });
      this.clear();
      this.dialog = false;
    },
    clear() {
      // this.$v.$reset();
      this.name = "";
      this.price = "";
      this.stock = "";
      this.image_url = "";
      this.select = null;
      this.image = null;
    },
    loadFile(event) {
      this.image_url = URL.createObjectURL(this.image);
      this.file = event;
      // console.log(this.image);
      // console.log(this.file);
      // image.removeAttribute("style");
    }
  }
};
</script>

<style></style>
