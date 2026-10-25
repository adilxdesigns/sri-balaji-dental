Add-Type -AssemblyName System.Drawing
$srcPath = (Resolve-Path 'public/assets/laser_surgery_clean_wall_v2.jpg').Path
$srcImg = [System.Drawing.Image]::FromFile($srcPath)
$w = $srcImg.Width
$h = $srcImg.Height

# Zoom in by ~25%
$zoomFactor = 1.25
$cropW = [int]($w / $zoomFactor)
$cropH = [int]($h / $zoomFactor)

# Doctor and patient on right side
$cropX = [int]($w - $cropW - ($w * 0.01))
$cropY = [int](($h - $cropH) * 0.45)

$destBmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($destBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$destRect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)

$g.DrawImage($srcImg, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$outPath = (Resolve-Path 'public/assets').Path + '\laser_surgery_clean_wall_zoomed.jpg'
$destBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$destBmp.Dispose()
$srcImg.Dispose()

Write-Output "Zoomed image created at $outPath"
