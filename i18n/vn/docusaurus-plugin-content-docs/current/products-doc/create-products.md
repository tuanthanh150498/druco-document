---
id: create-doc
title: Tạo một sản phẩm mới
description: How to add/edit/delete products
slug: /tao-mot-san-pham-moi
sidebar_label: 'Tạo một sản phẩm mới'
sidebar_position: 3
---

# Tạo một sản phẩm mới

### ** Bước 1: ** Đăng nhập vào Trang Admin

<!-- ![Dashboad admin images](/images/Dashboard.png) -->
<img
  src={require('/images/Dashboard.png').default}
  alt="Example banner"
/>

### ** Bước 2: ** Chọn mục "Products/Add new" ở thanh sidebar bên trái

<img
  src={require('/images/products-add-new.png').default}
  alt="Example banner"
/>

#### Trang thêm sản phẩm mới gồm các phần:
**1. Product name:** Tên sản phẩm cần tạo

**2. Product description:** Mô tả sản phẩm

**3. Product Options:** 
  - Product Layout: Bố cục của sản phẩm
  - Custom Tab: Tab tùy biến
  - Breadcrumbs:
  - Video: Video sản phẩm
  - 360 Gallery: Hình ảnh 360 độ của sản phẩm

**4. Product data:** Chọn Simple Product
  - General: Cấu hình giá cho sản phẩm cần tạo
    - Regular price: giá gốc
    - Sale price: giá sale
  <img
    src={require('/images/general-product.jpg').default}
    alt="Example banner"
  />  
  - Inventory: Tồn kho
    - SKU: Mã sản phẩm
    - Stock managerment
    - Stock status: Có 3 trạng thái của sản phẩm là In Stock (Còn hàng) - Out of Stock (Hết hàng) - On backorder (Đặt hàng sau)
    - Sold individually: Chỉ được mua 1 sản phẩm trên 1 lần order
  <img
    src={require('/images/inventory-product.jpg').default}
    alt="Example banner"
  />  
  - Shipping: Giao hàng
    - Weight: Cân nặng sản phẩm
    - Dimensions: Kích thước sản phẩm
    - Shipping class: Phương thức giao hàng theo từng sản phẩm (Hiện không có phương thức giao hàng)
  <img
    src={require('/images/shipping-product.jpg').default}
    alt="Example banner"
  />  
  - Linked Products: Dùng để thêm sản phẩm Upsell và Cross-Sell, chọn sản phẩm bán kèm với sản phẩm hiện tại để tăng doanh thu.
  <img
    src={require('/images/linked-product.jpg').default}
    alt="Example banner"
  />  
  - Attributes: Thêm thuộc tính cho sản phẩm (vd: màu sắc, size,...)
  <img
    src={require('/images/attributes-product.jpg').default}
    alt="Example banner"
  />
  - Advanced
  - Get more options 

**5. Product short description:** Mô tả ngắn của sản phẩm

**6. Product image:** Thêm ảnh đại diện cho sản phẩm (hiển thị ra bên ngoài cửa hàng)

**7. Product gallery:** Thêm các hình ảnh khác để mô tả sản phẩm kỹ hơn

**8. Product categories:** Thêm các hình ảnh khác để mô tả sản phẩm kỹ hơn

**9. Product tags:** Gắn thẻ cho sản phẩm (Tốt cho SEO)

**10. Product brands:** Thêm nhãn hiệu cho sản phẩm

<img
  src={require('/images/Add-new.png').default}
  alt="Example banner"
/>

### ** Bước 3: ** Click "Publish" để thêm mới sản phẩm

<img
  src={require('/images/Add-new-product.png').default}
  alt="Example banner"
/>