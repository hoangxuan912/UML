$(document).ready(function() {
    // Handle the click event on the "Xuất bò" button
    $(".export-button").click(function() {
        var cattleId = $(this).data("id");
        var cattleNameId = $(this).data("nameid");
        var cattleGiốngBò = $(this).data("giốngbò");
        var cattleGender = $(this).data("gender");
        var cattleNgàyNhậpChuồng = $(this).data("ngàynhậpchuồng");
        var cattleCânnhập = $(this).data("cânnhập");
        
        // Set the modal fields with cattle information
        $("#cattleId").text(cattleId);
        $("#cattleNameId").text(cattleNameId);
        $("#cattleGiốngBò").text(cattleGiốngBò);
        $("#cattleGender").text(cattleGender);
        $("#cattleNgàyNhậpChuồng").text(cattleNgàyNhậpChuồng);
        $("#cattleCânNhập").text(cattleCânnhập);
        
        // Clear the export weight input field
        $("#exportWeight").val("");
    });
    
    // Handle the "Xác nhận" button click in the modal
    $("#confirmExport").click(function() {
        // Get the export weight from the input field
        var exportWeight = $("#exportWeight").val();
        
        // You can process the export action here
        // For now, let's log the export weight
        console.log("Export Weight: " + exportWeight);
        
        // Close the modal
        $("#cattleInfoModal").modal("hide");
    });
});