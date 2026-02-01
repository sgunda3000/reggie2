import jsPDF from 'jspdf'

interface ChangeControlData {
  changeRequestId: string
  changeTitle: string
  requesterName: string
  requesterEmail: string
  requesterDepartment: string
  requestDate: string
  changeType: string
  priority: string
  description: string
  businessJustification: string
  affectedSystems: string
  affectedControls: string
  nistControls: string
  riskAssessment: string
  implementationPlan: string
  rollbackPlan: string
  testingPlan: string
  approvalRequired: string
  estimatedDowntime: string
  scheduledDate: string
  scheduledTime: string
  changeOwner: string
  changeOwnerEmail: string
  implementationTeam: string
  postImplementationReview: string
  documentationRequired: string
}

export function generatePDF(data: ChangeControlData) {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  let yPosition = margin

  // Helper function to add a new page if needed
  const checkPageBreak = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      doc.addPage()
      yPosition = margin
    }
  }

  // Helper function to add text with word wrapping
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 10) => {
    doc.setFontSize(fontSize)
    const lines = doc.splitTextToSize(text || 'N/A', maxWidth)
    doc.text(lines, x, y)
    return lines.length * (fontSize * 0.4) + 2
  }

  // Header
  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  doc.text('NIST 800-53 Change Control Document', pageWidth / 2, yPosition, { align: 'center' })
  yPosition += 10

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text('Reggie AI - Automated Change Control Documentation', pageWidth / 2, yPosition, { align: 'center' })
  yPosition += 15

  // Section 1: Basic Information
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('1. Basic Information', margin, yPosition)
  yPosition += 8

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  
  const basicInfo = [
    ['Change Request ID:', data.changeRequestId || 'N/A'],
    ['Change Title:', data.changeTitle || 'N/A'],
    ['Request Date:', data.requestDate || 'N/A'],
  ]

  basicInfo.forEach(([label, value]) => {
    checkPageBreak(8)
    doc.setFont('helvetica', 'bold')
    doc.text(label, margin, yPosition)
    doc.setFont('helvetica', 'normal')
    const textWidth = pageWidth - margin * 2 - 60
    const height = addWrappedText(value, margin + 60, yPosition, textWidth)
    yPosition += Math.max(height, 8)
  })

  yPosition += 5

  // Section 2: Requester Information
  checkPageBreak(20)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('2. Requester Information', margin, yPosition)
  yPosition += 8

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  
  const requesterInfo = [
    ['Requester Name:', data.requesterName || 'N/A'],
    ['Requester Email:', data.requesterEmail || 'N/A'],
    ['Department:', data.requesterDepartment || 'N/A'],
  ]

  requesterInfo.forEach(([label, value]) => {
    checkPageBreak(8)
    doc.setFont('helvetica', 'bold')
    doc.text(label, margin, yPosition)
    doc.setFont('helvetica', 'normal')
    const textWidth = pageWidth - margin * 2 - 60
    const height = addWrappedText(value, margin + 60, yPosition, textWidth)
    yPosition += Math.max(height, 8)
  })

  yPosition += 5

  // Section 3: Change Details
  checkPageBreak(30)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('3. Change Details', margin, yPosition)
  yPosition += 8

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  
  const changeDetails = [
    ['Change Type:', data.changeType || 'N/A'],
    ['Priority:', data.priority || 'N/A'],
  ]

  changeDetails.forEach(([label, value]) => {
    checkPageBreak(8)
    doc.setFont('helvetica', 'bold')
    doc.text(label, margin, yPosition)
    doc.setFont('helvetica', 'normal')
    const textWidth = pageWidth - margin * 2 - 60
    const height = addWrappedText(value, margin + 60, yPosition, textWidth)
    yPosition += Math.max(height, 8)
  })

  checkPageBreak(15)
  doc.setFont('helvetica', 'bold')
  doc.text('Description:', margin, yPosition)
  yPosition += 6
  doc.setFont('helvetica', 'normal')
  const descHeight = addWrappedText(data.description || 'N/A', margin, yPosition, pageWidth - margin * 2)
  yPosition += descHeight + 5

  checkPageBreak(15)
  doc.setFont('helvetica', 'bold')
  doc.text('Business Justification:', margin, yPosition)
  yPosition += 6
  doc.setFont('helvetica', 'normal')
  const justificationHeight = addWrappedText(data.businessJustification || 'N/A', margin, yPosition, pageWidth - margin * 2)
  yPosition += justificationHeight + 5

  // Section 4: NIST 800-53 Controls
  checkPageBreak(30)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('4. NIST 800-53 Controls', margin, yPosition)
  yPosition += 8

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')

  checkPageBreak(15)
  doc.setFont('helvetica', 'bold')
  doc.text('Affected Systems:', margin, yPosition)
  yPosition += 6
  doc.setFont('helvetica', 'normal')
  const systemsHeight = addWrappedText(data.affectedSystems || 'N/A', margin, yPosition, pageWidth - margin * 2)
  yPosition += systemsHeight + 5

  checkPageBreak(15)
  doc.setFont('helvetica', 'bold')
  doc.text('Affected Security Controls:', margin, yPosition)
  yPosition += 6
  doc.setFont('helvetica', 'normal')
  const controlsHeight = addWrappedText(data.affectedControls || 'N/A', margin, yPosition, pageWidth - margin * 2)
  yPosition += controlsHeight + 5

  checkPageBreak(8)
  doc.setFont('helvetica', 'bold')
  doc.text('NIST 800-53 Control IDs:', margin, yPosition)
  doc.setFont('helvetica', 'normal')
  const nistHeight = addWrappedText(data.nistControls || 'N/A', margin + 60, yPosition, pageWidth - margin * 2 - 60)
  yPosition += Math.max(nistHeight, 8) + 5

  // Section 5: Risk Assessment
  checkPageBreak(20)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('5. Risk Assessment', margin, yPosition)
  yPosition += 8

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  checkPageBreak(15)
  const riskHeight = addWrappedText(data.riskAssessment || 'N/A', margin, yPosition, pageWidth - margin * 2)
  yPosition += riskHeight + 5

  // Section 6: Implementation Details
  checkPageBreak(30)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('6. Implementation Details', margin, yPosition)
  yPosition += 8

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')

  checkPageBreak(15)
  doc.setFont('helvetica', 'bold')
  doc.text('Implementation Plan:', margin, yPosition)
  yPosition += 6
  doc.setFont('helvetica', 'normal')
  const implHeight = addWrappedText(data.implementationPlan || 'N/A', margin, yPosition, pageWidth - margin * 2)
  yPosition += implHeight + 5

  checkPageBreak(15)
  doc.setFont('helvetica', 'bold')
  doc.text('Rollback Plan:', margin, yPosition)
  yPosition += 6
  doc.setFont('helvetica', 'normal')
  const rollbackHeight = addWrappedText(data.rollbackPlan || 'N/A', margin, yPosition, pageWidth - margin * 2)
  yPosition += rollbackHeight + 5

  checkPageBreak(15)
  doc.setFont('helvetica', 'bold')
  doc.text('Testing Plan:', margin, yPosition)
  yPosition += 6
  doc.setFont('helvetica', 'normal')
  const testingHeight = addWrappedText(data.testingPlan || 'N/A', margin, yPosition, pageWidth - margin * 2)
  yPosition += testingHeight + 5

  // Section 7: Scheduling
  checkPageBreak(20)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('7. Scheduling', margin, yPosition)
  yPosition += 8

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  
  const schedulingInfo = [
    ['Scheduled Date:', data.scheduledDate || 'N/A'],
    ['Scheduled Time:', data.scheduledTime || 'N/A'],
    ['Estimated Downtime:', data.estimatedDowntime || 'N/A'],
  ]

  schedulingInfo.forEach(([label, value]) => {
    checkPageBreak(8)
    doc.setFont('helvetica', 'bold')
    doc.text(label, margin, yPosition)
    doc.setFont('helvetica', 'normal')
    const textWidth = pageWidth - margin * 2 - 60
    const height = addWrappedText(value, margin + 60, yPosition, textWidth)
    yPosition += Math.max(height, 8)
  })

  yPosition += 5

  // Section 8: Change Management
  checkPageBreak(20)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('8. Change Management', margin, yPosition)
  yPosition += 8

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  
  const changeMgmtInfo = [
    ['Change Owner:', data.changeOwner || 'N/A'],
    ['Change Owner Email:', data.changeOwnerEmail || 'N/A'],
    ['Implementation Team:', data.implementationTeam || 'N/A'],
  ]

  changeMgmtInfo.forEach(([label, value]) => {
    checkPageBreak(8)
    doc.setFont('helvetica', 'bold')
    doc.text(label, margin, yPosition)
    doc.setFont('helvetica', 'normal')
    const textWidth = pageWidth - margin * 2 - 60
    const height = addWrappedText(value, margin + 60, yPosition, textWidth)
    yPosition += Math.max(height, 8)
  })

  yPosition += 5

  // Section 9: Additional Information
  if (data.postImplementationReview || data.documentationRequired) {
    checkPageBreak(30)
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('9. Additional Information', margin, yPosition)
    yPosition += 8

    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')

    if (data.postImplementationReview) {
      checkPageBreak(15)
      doc.setFont('helvetica', 'bold')
      doc.text('Post-Implementation Review Plan:', margin, yPosition)
      yPosition += 6
      doc.setFont('helvetica', 'normal')
      const reviewHeight = addWrappedText(data.postImplementationReview, margin, yPosition, pageWidth - margin * 2)
      yPosition += reviewHeight + 5
    }

    if (data.documentationRequired) {
      checkPageBreak(15)
      doc.setFont('helvetica', 'bold')
      doc.text('Documentation Required:', margin, yPosition)
      yPosition += 6
      doc.setFont('helvetica', 'normal')
      const docHeight = addWrappedText(data.documentationRequired, margin, yPosition, pageWidth - margin * 2)
      yPosition += docHeight + 5
    }
  }

  // Footer with approval section
  checkPageBreak(40)
  yPosition += 10
  doc.setDrawColor(0, 0, 0)
  doc.line(margin, yPosition, pageWidth - margin, yPosition)
  yPosition += 10

  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('Approval Signatures', margin, yPosition)
  yPosition += 15

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  
  const signatures = [
    ['Requester:', ''],
    ['Change Owner:', ''],
    ['Security Officer:', ''],
    ['IT Manager:', ''],
  ]

  signatures.forEach(([label, _], index) => {
    checkPageBreak(20)
    doc.setFont('helvetica', 'bold')
    doc.text(label, margin, yPosition)
    doc.setFont('helvetica', 'normal')
    doc.line(margin + 40, yPosition + 5, pageWidth - margin - 100, yPosition + 5)
    doc.text('Date:', pageWidth - margin - 90, yPosition)
    doc.line(pageWidth - margin - 50, yPosition + 5, pageWidth - margin, yPosition + 5)
    yPosition += 15
  })

  // Save the PDF
  const fileName = `Change_Control_${data.changeRequestId || 'Document'}_${new Date().toISOString().split('T')[0]}.pdf`
  doc.save(fileName)
}
