module.exports = mongoose => {
    const Product = mongoose.model(
      "product",
      mongoose.Schema(
        {
          title: String,
          description: String,
          price: Number,
          category: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Product;
  };
  