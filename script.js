function openPrescriptionModal() {
    document.getElementById('prescriptionModal').classList.remove('hidden');
}

function closePrescriptionModal() {
    document.getElementById('prescriptionModal').classList.add('hidden');
}

function submitPrescription(e) {
    e.preventDefault();
    alert('تم رفع الروشتة (roshaj.jpg) بنجاح وسيتم التواصل معك فوراً.');
    closePrescriptionModal();
    e.target.reset();
}