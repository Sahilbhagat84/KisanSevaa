var validate_and_preview = function() {
    // Clean the old Image preview
    if (document.getElementById('image_preview').innerHTML !== "") {
        document.getElementById('image_preview').innerHTML = "";
    }

    // Clean old alert
    document.getElementById('alert').removeAttribute('style');
    document.getElementById('alert').innerHTML = '';

    var images = document.getElementById("files").files;
    var total_files = images.length;

    // Check the file size
    var total_size = 0
    for (var i = 0; i < total_files; i++) {
        var fsize = images.item(i).size; // file size in bytes
        var fsize_mb = fsize / (1024 * 1024); // file size in MB
        total_size += fsize_mb
    }
    // Show alert message for file size greater than 50 MB
    if (total_size >= 50) {
        document.getElementById('alert').setAttribute('style', 'padding-top: 64px;');
        document.getElementById('alert').innerHTML = '<p class="mb-0 mt-3">You uploaded files larger than 50 MB. The Total Maximum file size should be 50 MB.</p>';
        document.getElementById('files').value = "";
        return;
    }

    // Check the file type
    flag = 0;
    for (var i = 0; i < total_files; i++) {
        var filename = images[i].name;
        var file_list = filename.split(".");
        var file_ext = file_list[file_list.length - 1].toUpperCase();
        var ext = ['JPG', 'JPEG', 'PNG'];
        if (!ext.includes(file_ext)) {
            flag += 1;
            break;
        }
    }
    // Show the alert message for file type other than PNG/JPEG/JPG
    if (flag > 0) {
        document.getElementById('alert').setAttribute('style', 'padding-top: 64px;');
        document.getElementById('alert').innerHTML = '<p class="mb-0 mt-3">You uploaded files other than PNG or JPG/JPEG. We currently supports PNG or JPG/JPEG Image Files Only.</p>';
        document.getElementById('files').value = "";
        flag = 0;
        return;
    }

    // Preview the images
    for (var i = 0; i < total_files; i++) {
        var filename = images[i].name;
        if (ext.includes(file_ext)) {
            if (i === 0) {
                document.getElementById('image_preview').innerHTML += '<h4 class="pb-3">Image Preview:</h4>'
            }

            document.getElementById('image_preview').innerHTML += '<div class="card custom-bg-color card-custom mx-2 mb-3"><img src="' + URL.createObjectURL(images[i]) + '" class="card-img-top" alt="Crop Image" style="padding-top: 12px; max-height:150px; object-fit: cover;"><div class="card-body"><p class="card-text"><strong>Filename:</strong> ' + filename + '</p></div></div>';
        }
    }
}

document.getElementById("files").addEventListener("change", validate_and_preview);