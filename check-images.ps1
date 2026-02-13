# Dental Solutions - Image Checker Script

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Dental Solutions Image Checker" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan

$requiredImages = @(
    "teeth-cleaning.jpg",
    "smile-designing.jpg", 
    "teeth-filling.jpg",
    "root-canal.jpg",
    "teeth-whitening.jpg",
    "wisdom-tooth.jpg"
)

$imagesPath = "public\images"
$missingCount = 0
$foundCount = 0

Write-Host ""
Write-Host "Checking for required images..." -ForegroundColor Yellow
Write-Host ""

foreach ($image in $requiredImages) {
    $fullPath = Join-Path $imagesPath $image
    if (Test-Path $fullPath) {
        Write-Host "  OK: $image" -ForegroundColor Green
        $foundCount++
    } else {
        Write-Host "  MISSING: $image" -ForegroundColor Red
        $missingCount++
    }
}

Write-Host ""
Write-Host "----------------------------------" -ForegroundColor Cyan
Write-Host "Summary: Found $foundCount of $($requiredImages.Count) images" -ForegroundColor Yellow

if ($missingCount -gt 0) {
    Write-Host ""
    Write-Host "Please add the missing images to: $imagesPath" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "All images ready! Visit: http://localhost:3001" -ForegroundColor Green
}

Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
