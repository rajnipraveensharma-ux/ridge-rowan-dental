# IMAGE PLACEHOLDER MAPPING & REPLACEMENT GUIDE

## Quick Overview
Your website has **15+ image placeholders** using sample Unsplash URLs. Here's exactly where each one is and what to replace it with.

---

## FILE: index-medical.html (Main Homepage)

### 1. Hero X-Ray Image (CRITICAL - Most Visible)
**Location:** Line ~160 in `<div class="xray-wrap">`
**Current URL:** `https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800&q=80`
**Alt Text:** `Dental X-ray scan showing tooth structure with medical precision - placeholder for your dental imaging`
**Recommended Image:** Professional dental X-ray or close-up of tooth with medical imaging
**Suggested Source:** 
- Your own X-ray images
- Shutterstock medical license
- Getty Images dental collection

**Replacement Code:**
```html
<img id="xrayImg" class="xray-img"
     src="YOUR_XRAY_IMAGE_URL_HERE"
     alt="Dental X-ray scan showing tooth structure with medical precision - placeholder for your dental imaging"
     crossorigin="anonymous" />
```

---

### 2-6. Team Member Photos
**Location:** Lines ~385-405 in `<div class="team-grid">`

#### Dr. Daniela - Senior Cosmetic Dentist
**Current URL:** `https://images.unsplash.com/photo-1559839734033-6461efb1b89f?w=400&q=80`
**Alt Text:** `Dr. Daniela - Senior cosmetic dentist with 15+ years experience`
**Recommended:** Professional headshot of female dentist in clinic/office
**Dimensions:** 400x400px minimum

```html
<img src="YOUR_DR_DANIELA_URL_HERE" 
     alt="Dr. Daniela - Senior cosmetic dentist with 15+ years experience" />
```

#### Dr. Fidel - Restorative Dentist
**Current URL:** `https://images.unsplash.com/photo-1612349317150-e88a39ffb5a2?w=400&q=80`
**Alt Text:** `Dr. Fidel - Restorative dentistry specialist`
**Recommended:** Professional headshot of male dentist
**Dimensions:** 400x400px minimum

```html
<img src="YOUR_DR_FIDEL_URL_HERE" 
     alt="Dr. Fidel - Restorative dentistry specialist" />
```

#### Dr. Pamela - Preventive Care Specialist
**Current URL:** `https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80`
**Alt Text:** `Dr. Pamela - Pediatric and preventive dentistry`
**Recommended:** Professional headshot, pediatric or preventive specialist
**Dimensions:** 400x400px minimum

```html
<img src="YOUR_DR_PAMELA_URL_HERE" 
     alt="Dr. Pamela - Pediatric and preventive dentistry" />
```

#### Dr. Uriel - Oral Surgery Specialist
**Current URL:** `https://images.unsplash.com/photo-1631217314831-dc54bc48b254?w=400&q=80`
**Alt Text:** `Dr. Uriel - Oral surgery and implantology specialist`
**Recommended:** Professional headshot, perhaps in surgical attire
**Dimensions:** 400x400px minimum

```html
<img src="YOUR_DR_URIEL_URL_HERE" 
     alt="Dr. Uriel - Oral surgery and implantology specialist" />
```

#### Dr. Zunet - Endodontic Specialist
**Current URL:** `https://images.unsplash.com/photo-1643580614643-cb0ddc776ebc?w=400&q=80`
**Alt Text:** `Dr. Zunet - Endodontic specialist`
**Recommended:** Professional headshot, endodontic specialist
**Dimensions:** 400x400px minimum

```html
<img src="YOUR_DR_ZUNET_URL_HERE" 
     alt="Dr. Zunet - Endodontic specialist" />
```

---

## FILE: services-implants.html

### 7. Implant Procedure/3D Model Image
**Location:** Line ~140 in `<div class="grid-image">`
**Current URL:** `https://images.unsplash.com/photo-1576091160648-112173f7f869?w=600&q=80`
**Alt Text:** `Dental implant 3D model showing titanium post and crown components - placeholder for your dental imaging`
**Recommended Image:** 
- 3D model of dental implant
- Implant procedure photo
- Close-up of implant components
- Digital diagram
**Dimensions:** 600x400px minimum
**Suggested Source:**
- 3D rendering software
- Medical illustration service
- Stock dental imagery sites

```html
<img src="YOUR_IMPLANT_IMAGE_URL_HERE" 
     alt="Dental implant 3D model showing titanium post and crown components - placeholder for your dental imaging" />
```

---

## FILE: services-veneers.html

### 8. Smile Transformation Image
**Location:** Line ~140 in `<div class="grid-image">`
**Current URL:** `https://images.unsplash.com/photo-1618164436241-4473940571cd?w=600&q=80`
**Alt Text:** `Professional smile with custom porcelain veneers showing natural teeth alignment - placeholder for before-after dental imaging`
**Recommended:** Before/after smile or professional smile with veneers
**Dimensions:** 600x400px minimum

```html
<img src="YOUR_VENEER_SMILE_URL_HERE" 
     alt="Professional smile with custom porcelain veneers showing natural teeth alignment - placeholder for before-after dental imaging" />
```

---

### 9-14. Smile Gallery (6 Images)
**Location:** Lines ~160-190 in `<div class="smile-gallery">`
**Layout:** 6-image grid, each 3:4 aspect ratio (portrait)
**Recommended Dimensions:** 500x600px each
**Suggested Content:** Patient smile transformations, before-after comparisons

#### Gallery Item 1
**Current URL:** `https://images.unsplash.com/photo-1559839734033-6461efb1b89f?w=500&q=80`
**Alt Text:** `Patient smile transformation with porcelain veneers - before and after dental cosmetic dentistry`
```html
<img src="YOUR_GALLERY_1_URL_HERE" alt="Patient smile transformation with porcelain veneers - before and after dental cosmetic dentistry" />
```

#### Gallery Item 2
**Current URL:** `https://images.unsplash.com/photo-1612349317150-e88a39ffb5a2?w=500&q=80`
**Alt Text:** `Cosmetic veneer case showing whitened teeth alignment and shape correction`
```html
<img src="YOUR_GALLERY_2_URL_HERE" alt="Cosmetic veneer case showing whitened teeth alignment and shape correction" />
```

#### Gallery Item 3
**Current URL:** `https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&q=80`
**Alt Text:** `Full mouth veneer reconstruction with natural teeth appearance`
```html
<img src="YOUR_GALLERY_3_URL_HERE" alt="Full mouth veneer reconstruction with natural teeth appearance" />
```

#### Gallery Item 4
**Current URL:** `https://images.unsplash.com/photo-1631217314831-dc54bc48b254?w=500&q=80`
**Alt Text:** `Smile makeover using custom porcelain veneers for aesthetic enhancement`
```html
<img src="YOUR_GALLERY_4_URL_HERE" alt="Smile makeover using custom porcelain veneers for aesthetic enhancement" />
```

#### Gallery Item 5
**Current URL:** `https://images.unsplash.com/photo-1643580614643-cb0ddc776ebc?w=500&q=80`
**Alt Text:** `Veneer placement showing improved smile aesthetics and tooth appearance`
```html
<img src="YOUR_GALLERY_5_URL_HERE" alt="Veneer placement showing improved smile aesthetics and tooth appearance" />
```

#### Gallery Item 6
**Current URL:** `https://images.unsplash.com/photo-1576091160506-e6835cdcd4c7?w=500&q=80`
**Alt Text:** `Professional smile redesign with cosmetic veneers treatment result`
```html
<img src="YOUR_GALLERY_6_URL_HERE" alt="Professional smile redesign with cosmetic veneers treatment result" />
```

---

## IMAGE HOSTING SERVICES - STEP BY STEP

### Option 1: ImgBB (Recommended for Quick Start)
1. Go to https://imgbb.com
2. Click "Start Uploading"
3. Upload your image (drag & drop)
4. Copy the Direct Link (ends with .jpg)
5. Paste into HTML `src=""`

**Example Result:**
```
https://i.ibb.co/VVdXjkL/dental-xray.jpg
```

### Option 2: Cloudinary (Recommended for Professional)
1. Sign up at https://cloudinary.com
2. Go to Media Library
3. Upload files
4. Copy the URL for each image
5. Optionally add URL parameters for optimization: `?w=600&q=80`

**Example Result:**
```
https://res.cloudinary.com/youraccount/image/upload/dental-xray.jpg
```

### Option 3: AWS S3 (Recommended for Long-term)
1. Create AWS account (free tier available)
2. Create S3 bucket
3. Upload images
4. Make images public
5. Copy object URL

**Example Result:**
```
https://yourbucket.s3.amazonaws.com/dental-xray.jpg
```

---

## BULK REPLACEMENT STRATEGY

### Method 1: Manual Search & Replace (Simple)
1. Open each HTML file in editor
2. Use Ctrl+H (Find & Replace)
3. Find old URL → Replace with new URL
4. Save file

### Method 2: Spreadsheet Method (Organized)
Create a CSV file:
```
Description,Current_URL,New_URL,File_Name
Hero X-Ray,https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800&q=80,https://imgbb.com/your-xray-id,index-medical.html
Dr Daniela,https://images.unsplash.com/photo-1559839734033-6461efb1b89f?w=400&q=80,https://imgbb.com/dr-daniela-id,index-medical.html
...
```

Then use Find & Replace for each row.

---

## IMAGE OPTIMIZATION CHECKLIST

Before uploading, ensure your images meet these criteria:

- [ ] Image is **legal** to use (own photo, licensed, or royalty-free)
- [ ] Image is **clear and professional** quality
- [ ] Image is **compressed** to reasonable file size (< 500KB)
- [ ] Image dimensions are **appropriate** for the section
- [ ] Image has **good contrast** and visibility
- [ ] Image is **appropriate** for medical/dental context
- [ ] Image has **no sensitive patient data** visible (if using real patients, get consent)

---

## FILE SIZE TARGETS

| Image Type | Width | Height | File Size | Quality |
|------------|-------|--------|-----------|---------|
| Hero X-ray | 800 | 600 | < 300KB | 80% |
| Team photo | 400 | 400 | < 150KB | 85% |
| Procedure | 600 | 400 | < 250KB | 80% |
| Gallery | 500 | 600 | < 200KB | 75% |
| Thumbnail | 300 | 300 | < 100KB | 70% |

---

## COMPRESSION TOOLS

### Online (Free, No Account)
- **TinyPNG** (https://tinypng.com) - Excellent compression
- **Compress.com** (https://compress.com) - Multiple formats
- **ImageOptim** (https://imageoptim.com) - Automatic

### Desktop Software
- **ImageOptim** (Mac) - Automatic optimization
- **Bulk Image Optimization** (Windows) - Batch processing

### Hosting Site Built-in
- Most services (ImgBB, Cloudinary) compress automatically

---

## BATCH UPLOADING WORKFLOW

1. **Prepare images**
   - Resize to target dimensions
   - Compress files
   - Name descriptively
   - Organize in folder

2. **Upload to hosting**
   - Upload all images at once (most services allow bulk upload)
   - Wait for processing
   - Verify all uploads successful

3. **Collect URLs**
   - Document each image URL in spreadsheet
   - Double-check URLs are working
   - Note any special parameters

4. **Update HTML files**
   - Use Find & Replace
   - Replace one batch at a time
   - Save and test after each update

5. **Test locally**
   - Open HTML files in browser
   - Verify all images load
   - Check on mobile view
   - Test image hover effects

6. **Deploy**
   - Upload updated HTML files to server
   - Final verification on live site
   - Monitor for broken images

---

## TESTING CHECKLIST

After replacing images:
- [ ] All images load on desktop view
- [ ] All images load on tablet view (iPad)
- [ ] All images load on mobile view
- [ ] Images maintain aspect ratio
- [ ] No 404 errors in console
- [ ] Images have correct alt text
- [ ] Hover effects work properly
- [ ] Gallery images are clickable/responsive
- [ ] Performance is acceptable (page load < 3s)
- [ ] All links between pages work

---

## BACKUP REMINDER

Before making changes:
1. Save copies of original HTML files
2. Note current image URLs
3. Test changes on local copy first
4. Only deploy after testing

---

## COMMON MISTAKES TO AVOID

❌ **DON'T** use tiny/low-quality images  
✅ **DO** use professional, high-quality photos

❌ **DON'T** use images with text that says "Sample" or "Demo"  
✅ **DO** use real, professional images

❌ **DON'T** forget to update alt text  
✅ **DO** maintain descriptive alt text for accessibility & SEO

❌ **DON'T** use URLs that break  
✅ **DO** verify URLs are permanent (no expiration)

❌ **DON'T** skip compression  
✅ **DO** compress images to reasonable file size

❌ **DON'T** use copyrighted images  
✅ **DO** use only images you own or have licensed

---

## SUPPORT RESOURCES

### If Images Not Loading
- Check URL in browser directly (copy/paste in address bar)
- Verify URL has correct protocol (https://)
- Check hosting service is online
- Look for CORS errors in browser console
- Try uploading to different hosting service

### If Images Look Blurry
- Upload higher resolution image
- Check quality percentage (increase to 85-90%)
- Verify hosting isn't over-compressing

### If Gallery Not Responsive
- Check image aspect ratio
- Verify dimensions match CSS expectations
- Test in different browsers
- Clear browser cache

---

## QUICK LINKS

| Service | URL | Setup Time |
|---------|-----|------------|
| ImgBB | https://imgbb.com | 2 min |
| Cloudinary | https://cloudinary.com | 5 min |
| AWS S3 | https://aws.amazon.com/s3 | 15 min |
| Imgur | https://imgur.com | 1 min |
| Photobucket | https://photobucket.com | 3 min |

---

## FINAL SUMMARY

**Total Images to Replace:** 15  
**Total Hosting Services to Choose:** 1  
**Estimated Time:** 30-60 minutes  
**Difficulty Level:** ⭐ Easy (copy & paste URLs)

---

Created: April 21, 2026  
Document Version: 1.0
