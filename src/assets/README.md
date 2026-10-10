# 网站视觉与媒体说明

首页使用原创生成视觉 `hero-chrome-original.png`：黑色背景、液态金属雕塑、蓝色边缘反射，左侧留白承载标题。使用内置图像生成工具制作；CSS 提供轻微呼吸和指针视差，减少动态偏好下停止动画。首屏不使用作品视频素材。

作品区保留用户本地成片的静帧，以原比例显示。整体设计参考暗色影像作品集中的大字号、留白、金属视觉与错落展陈方向，不使用他人作品图片作为网页资产。

## 首图生成提示词

Use case: stylized-concept. Asset type: original premium creative film director portfolio website hero background, panoramic 16:9. Create an exquisite photorealistic 3D sculptural image: a single large floating asymmetrical twisted liquid-chrome ribbon, a folded toroidal knot with a large hollow opening, polished graphite and silver metal, a thin vivid electric cobalt blue luminous reflection on selected edges, subtle warm-white studio reflections, deep carbon-black seamless background (#090909). Composition: object occupies the RIGHT HALF of the panoramic frame, dramatic sculptural scale, roughly center x=75% and y=50%, cropping a little at the right edge is fine. LEFT HALF is completely black negative space for website title. Lighting: controlled high-end art gallery installation, one thin horizontal pale blue light near bottom reflected in metal, deep chiaroscuro, soft brushed imperfections and physically plausible metal reflections, minimal editorial luxury, sharp modern industrial art. No text, no lettering, no logos, no watermark, no humans, no cameras, no planets, no stars, no sci-fi UI, no purple clouds, no decorative particle dots. Render a serious sophisticated visual, not a generic glowing blob. 16:9 wide horizontal.

## 个人潮玩形象

`jizhongkuan-toy.png` 根据用户提供的三张本人照片生成，为透明背景的 3D 风格渲染图片，并非可旋转的三维模型。用于首页右侧，与原创金属环通过独立图层组合；保留黑发、银框眼镜与摄影师身份特征。关于我不重复展示人物。

生成提示词：Create a single premium 3D designer vinyl toy figurine based on the same young Chinese man in the three reference photos. Preserve recognizable identity: softly rounded oval face, tousled short black hair with natural fringe, thin silver metal glasses, calm approachable expression, youthful but adult. Full body with both feet visible, three-head-tall tasteful designer-toy proportions, not babyish or anime. Wear unbranded matte black photographer's jacket, black trousers and dark sneakers. Hold one realistically constructed compact black professional camera naturally in both hands at waist height. Three-quarter front stance looking toward viewer. Beautiful sculptural matte vinyl finish, refined small details, studio key light to illuminate face and black clothes, subtle cobalt blue edge lighting. Isolated cutout on genuinely transparent background, no backdrop, no text, no logo, no pedestal, no other objects. Composition centered with safe margins. This is an original 3D-rendered personal avatar for an elegant carbon-black photographer portfolio website, not a photo or a realistic human.

最终调整提示词：Transform this character into an unmistakably stylized 3D VINYL TOY, NOT a realistic person. Keep identity cues only: tousled black hair, silver oversized glasses, oval face, black photographer outfit, camera. Make head enormously oversized: head is 40 percent of entire total height, very short small body, stubby legs, tiny rounded toy hands, simplified smooth matte molded plastic hair in chunky sculpted locks, smooth vinyl face with minimal details, softly friendly expression. Entire character should look like a collectible physical designer toy sculpture, approximately 15 centimeters tall. Full body, both tiny feet visible. Matte black simplified hoodie with no fabric wrinkles, tiny black pants and little shoes. Hold a simple miniature black camera at chest level. Beautiful soft studio illumination with faint blue edge light. CRITICAL: truly transparent alpha background; remove existing dark backdrop and ALL lighting haze/glow behind figure, no rectangular background, no ground plane, no background shadow, no text, no logo. Centered toy fully inside frame with margin. Not human photorealism.

人物表达内容制作使用用户提供的第四张原图 `portrait-interview-user.png`，以完整画面展示。

## 后续媒体替换

- Hero 视频可使用无声、短循环、压缩后的 MP4，建议 1920×1080，文件控制在 12 MB 内。
- 每个项目卡使用可公开的横版 JPG/WebP，建议 1600×1000；避免客户联系人、报价、二维码和未获授权的人脸。
- 把媒体放入本目录，新增路径写入 `src/data/portfolioData.ts`，再由项目组件读取。
