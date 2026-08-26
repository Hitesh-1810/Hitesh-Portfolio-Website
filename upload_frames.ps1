$untracked = git ls-files --others "public\frames"
if (-not $untracked) {
    Write-Host "No untracked frames found."
    exit 0
}

$batchSize = 20
for ($i = 0; $i -lt $untracked.Length; $i += $batchSize) {
    $batch = $untracked | Select-Object -Skip $i -First $batchSize
    if ($batch) {
        foreach ($file in $batch) {
            git add $file
        }
        $start = ($batch[0] -replace '^.*frame_(\d+)\.png$','$1')
        $end = ($batch[-1] -replace '^.*frame_(\d+)\.png$','$1')
        git commit -m "Add video frames $start to $end"
        
        $success = $false
        $attempts = 0
        while (-not $success -and $attempts -lt 5) {
            $attempts++
            Write-Host "Pushing $start to $end, attempt $attempts..."
            git push origin main
            if ($LASTEXITCODE -eq 0) {
                $success = $true
                Write-Host "Push successful for $start to $end"
            } else {
                Write-Host "Push failed with exit code $LASTEXITCODE. Retrying in 5 seconds..."
                Start-Sleep -Seconds 5
            }
        }
        if (-not $success) {
            Write-Host "Failed to push $start to $end after 5 attempts."
            exit 1
        }
    }
}
Write-Host "All frames uploaded successfully!"
